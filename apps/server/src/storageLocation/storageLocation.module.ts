import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StorageLocationModuleBase } from "./base/storageLocation.module.base";
import { StorageLocationService } from "./storageLocation.service";
import { StorageLocationController } from "./storageLocation.controller";
import { StorageLocationResolver } from "./storageLocation.resolver";

@Module({
  imports: [StorageLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [StorageLocationController],
  providers: [StorageLocationService, StorageLocationResolver],
  exports: [StorageLocationService],
})
export class StorageLocationModule {}
