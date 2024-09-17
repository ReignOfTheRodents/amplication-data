import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InventoryUnitService } from "./inventoryUnit.service";
import { InventoryUnitControllerBase } from "./base/inventoryUnit.controller.base";

@swagger.ApiTags("inventoryUnits")
@common.Controller("inventoryUnits")
export class InventoryUnitController extends InventoryUnitControllerBase {
  constructor(
    protected readonly service: InventoryUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
