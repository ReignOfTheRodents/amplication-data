/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Certification } from "./Certification";
import { CertificationCountArgs } from "./CertificationCountArgs";
import { CertificationFindManyArgs } from "./CertificationFindManyArgs";
import { CertificationFindUniqueArgs } from "./CertificationFindUniqueArgs";
import { CreateCertificationArgs } from "./CreateCertificationArgs";
import { UpdateCertificationArgs } from "./UpdateCertificationArgs";
import { DeleteCertificationArgs } from "./DeleteCertificationArgs";
import { ComponentFindManyArgs } from "../../component/base/ComponentFindManyArgs";
import { Component } from "../../component/base/Component";
import { ContractFindManyArgs } from "../../contract/base/ContractFindManyArgs";
import { Contract } from "../../contract/base/Contract";
import { Vendor } from "../../vendor/base/Vendor";
import { CertificationService } from "../certification.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Certification)
export class CertificationResolverBase {
  constructor(
    protected readonly service: CertificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "any",
  })
  async _certificationsMeta(
    @graphql.Args() args: CertificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Certification])
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "any",
  })
  async certifications(
    @graphql.Args() args: CertificationFindManyArgs
  ): Promise<Certification[]> {
    return this.service.certifications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Certification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "own",
  })
  async certification(
    @graphql.Args() args: CertificationFindUniqueArgs
  ): Promise<Certification | null> {
    const result = await this.service.certification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "create",
    possession: "any",
  })
  async createCertification(
    @graphql.Args() args: CreateCertificationArgs
  ): Promise<Certification> {
    return await this.service.createCertification({
      ...args,
      data: {
        ...args.data,

        vendor: args.data.vendor
          ? {
              connect: args.data.vendor,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "update",
    possession: "any",
  })
  async updateCertification(
    @graphql.Args() args: UpdateCertificationArgs
  ): Promise<Certification | null> {
    try {
      return await this.service.updateCertification({
        ...args,
        data: {
          ...args.data,

          vendor: args.data.vendor
            ? {
                connect: args.data.vendor,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Certification)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "delete",
    possession: "any",
  })
  async deleteCertification(
    @graphql.Args() args: DeleteCertificationArgs
  ): Promise<Certification | null> {
    try {
      return await this.service.deleteCertification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Component], { name: "components" })
  @nestAccessControl.UseRoles({
    resource: "Component",
    action: "read",
    possession: "any",
  })
  async findComponents(
    @graphql.Parent() parent: Certification,
    @graphql.Args() args: ComponentFindManyArgs
  ): Promise<Component[]> {
    const results = await this.service.findComponents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Contract], { name: "contracts" })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  async findContracts(
    @graphql.Parent() parent: Certification,
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    const results = await this.service.findContracts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Vendor, {
    nullable: true,
    name: "vendor",
  })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "any",
  })
  async getVendor(
    @graphql.Parent() parent: Certification
  ): Promise<Vendor | null> {
    const result = await this.service.getVendor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
