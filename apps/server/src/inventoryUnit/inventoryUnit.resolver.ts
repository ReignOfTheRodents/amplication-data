import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InventoryUnitResolverBase } from "./base/inventoryUnit.resolver.base";
import { InventoryUnit } from "./base/InventoryUnit";
import { InventoryUnitService } from "./inventoryUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InventoryUnit)
export class InventoryUnitResolver extends InventoryUnitResolverBase {
  constructor(
    protected readonly service: InventoryUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
