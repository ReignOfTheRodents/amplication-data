import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StorageLocationResolverBase } from "./base/storageLocation.resolver.base";
import { StorageLocation } from "./base/StorageLocation";
import { StorageLocationService } from "./storageLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StorageLocation)
export class StorageLocationResolver extends StorageLocationResolverBase {
  constructor(
    protected readonly service: StorageLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
