import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DispositionService } from "./disposition.service";
import { DispositionControllerBase } from "./base/disposition.controller.base";

@swagger.ApiTags("dispositions")
@common.Controller("dispositions")
export class DispositionController extends DispositionControllerBase {
  constructor(
    protected readonly service: DispositionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
