import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InventoryUnitModuleBase } from "./base/inventoryUnit.module.base";
import { InventoryUnitService } from "./inventoryUnit.service";
import { InventoryUnitController } from "./inventoryUnit.controller";
import { InventoryUnitResolver } from "./inventoryUnit.resolver";

@Module({
  imports: [InventoryUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [InventoryUnitController],
  providers: [InventoryUnitService, InventoryUnitResolver],
  exports: [InventoryUnitService],
})
export class InventoryUnitModule {}
