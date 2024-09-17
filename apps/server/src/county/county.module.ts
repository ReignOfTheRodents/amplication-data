import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CountyModuleBase } from "./base/county.module.base";
import { CountyService } from "./county.service";
import { CountyController } from "./county.controller";
import { CountyResolver } from "./county.resolver";

@Module({
  imports: [CountyModuleBase, forwardRef(() => AuthModule)],
  controllers: [CountyController],
  providers: [CountyService, CountyResolver],
  exports: [CountyService],
})
export class CountyModule {}
