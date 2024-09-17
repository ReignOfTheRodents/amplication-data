import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CountyModule } from "./county/county.module";
import { VendorModule } from "./vendor/vendor.module";
import { ExpenseModule } from "./expense/expense.module";
import { CertificationModule } from "./certification/certification.module";
import { ComponentModule } from "./component/component.module";
import { ContractModule } from "./contract/contract.module";
import { DispositionModule } from "./disposition/disposition.module";
import { StorageLocationModule } from "./storageLocation/storageLocation.module";
import { InventoryUnitModule } from "./inventoryUnit/inventoryUnit.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    CountyModule,
    VendorModule,
    ExpenseModule,
    CertificationModule,
    ComponentModule,
    ContractModule,
    DispositionModule,
    StorageLocationModule,
    InventoryUnitModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
