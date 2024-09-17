import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CountyService } from "./county.service";
import { CountyControllerBase } from "./base/county.controller.base";

@swagger.ApiTags("counties")
@common.Controller("counties")
export class CountyController extends CountyControllerBase {
  constructor(
    protected readonly service: CountyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
