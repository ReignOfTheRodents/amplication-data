/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VendorService } from "../vendor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VendorCreateInput } from "./VendorCreateInput";
import { Vendor } from "./Vendor";
import { VendorFindManyArgs } from "./VendorFindManyArgs";
import { VendorWhereUniqueInput } from "./VendorWhereUniqueInput";
import { VendorUpdateInput } from "./VendorUpdateInput";
import { CertificationFindManyArgs } from "../../certification/base/CertificationFindManyArgs";
import { Certification } from "../../certification/base/Certification";
import { CertificationWhereUniqueInput } from "../../certification/base/CertificationWhereUniqueInput";
import { ExpenseFindManyArgs } from "../../expense/base/ExpenseFindManyArgs";
import { Expense } from "../../expense/base/Expense";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VendorControllerBase {
  constructor(
    protected readonly service: VendorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vendor })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVendor(@common.Body() data: VendorCreateInput): Promise<Vendor> {
    return await this.service.createVendor({
      data: data,
      select: {
        address: true,
        city: true,
        contactEmail: true,
        contactFirstName: true,
        contactLastName: true,
        contactPhone: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        product: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Vendor] })
  @ApiNestedQuery(VendorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vendors(@common.Req() request: Request): Promise<Vendor[]> {
    const args = plainToClass(VendorFindManyArgs, request.query);
    return this.service.vendors({
      ...args,
      select: {
        address: true,
        city: true,
        contactEmail: true,
        contactFirstName: true,
        contactLastName: true,
        contactPhone: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        product: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    const result = await this.service.vendor({
      where: params,
      select: {
        address: true,
        city: true,
        contactEmail: true,
        contactFirstName: true,
        contactLastName: true,
        contactPhone: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        product: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVendor(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() data: VendorUpdateInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.updateVendor({
        where: params,
        data: data,
        select: {
          address: true,
          city: true,
          contactEmail: true,
          contactFirstName: true,
          contactLastName: true,
          contactPhone: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
          product: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.deleteVendor({
        where: params,
        select: {
          address: true,
          city: true,
          contactEmail: true,
          contactFirstName: true,
          contactLastName: true,
          contactPhone: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
          product: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/certifications")
  @ApiNestedQuery(CertificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Certification",
    action: "read",
    possession: "any",
  })
  async findCertifications(
    @common.Req() request: Request,
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Certification[]> {
    const query = plainToClass(CertificationFindManyArgs, request.query);
    const results = await this.service.findCertifications(params.id, {
      ...query,
      select: {
        action: true,
        applicationDate: true,
        certificationDate: true,
        createdAt: true,
        description: true,
        expirationDate: true,
        federalCertDate: true,
        federalCertNumber: true,
        id: true,
        modelNumber: true,
        notes: true,
        systemSubType: true,
        systemType: true,
        typeField: true,
        updatedAt: true,

        vendor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/certifications")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async connectCertifications(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: CertificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      certifications: {
        connect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/certifications")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async updateCertifications(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: CertificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      certifications: {
        set: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/certifications")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async disconnectCertifications(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: CertificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      certifications: {
        disconnect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/expenses")
  @ApiNestedQuery(ExpenseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async findExpenses(
    @common.Req() request: Request,
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Expense[]> {
    const query = plainToClass(ExpenseFindManyArgs, request.query);
    const results = await this.service.findExpenses(params.id, {
      ...query,
      select: {
        amount: true,

        contract: {
          select: {
            id: true,
          },
        },

        county: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fund: true,
        id: true,
        name: true,
        notes: true,
        owner: true,
        updatedAt: true,

        vendor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async connectExpenses(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        connect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async updateExpenses(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        set: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/expenses")
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async disconnectExpenses(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        disconnect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
