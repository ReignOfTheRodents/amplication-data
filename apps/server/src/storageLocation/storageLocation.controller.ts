import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StorageLocationService } from "./storageLocation.service";
import { StorageLocationControllerBase } from "./base/storageLocation.controller.base";

@swagger.ApiTags("storageLocations")
@common.Controller("storageLocations")
export class StorageLocationController extends StorageLocationControllerBase {
  constructor(
    protected readonly service: StorageLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
