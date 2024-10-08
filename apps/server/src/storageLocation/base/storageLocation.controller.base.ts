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
import { StorageLocationService } from "../storageLocation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StorageLocationCreateInput } from "./StorageLocationCreateInput";
import { StorageLocation } from "./StorageLocation";
import { StorageLocationFindManyArgs } from "./StorageLocationFindManyArgs";
import { StorageLocationWhereUniqueInput } from "./StorageLocationWhereUniqueInput";
import { StorageLocationUpdateInput } from "./StorageLocationUpdateInput";
import { InventoryUnitFindManyArgs } from "../../inventoryUnit/base/InventoryUnitFindManyArgs";
import { InventoryUnit } from "../../inventoryUnit/base/InventoryUnit";
import { InventoryUnitWhereUniqueInput } from "../../inventoryUnit/base/InventoryUnitWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StorageLocationControllerBase {
  constructor(
    protected readonly service: StorageLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StorageLocation })
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStorageLocation(
    @common.Body() data: StorageLocationCreateInput
  ): Promise<StorageLocation> {
    return await this.service.createStorageLocation({
      data: data,
      select: {
        address: true,
        city: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [StorageLocation] })
  @ApiNestedQuery(StorageLocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async storageLocations(
    @common.Req() request: Request
  ): Promise<StorageLocation[]> {
    const args = plainToClass(StorageLocationFindManyArgs, request.query);
    return this.service.storageLocations({
      ...args,
      select: {
        address: true,
        city: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StorageLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async storageLocation(
    @common.Param() params: StorageLocationWhereUniqueInput
  ): Promise<StorageLocation | null> {
    const result = await this.service.storageLocation({
      where: params,
      select: {
        address: true,
        city: true,
        createdAt: true,
        id: true,
        name: true,
        notes: true,
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
  @swagger.ApiOkResponse({ type: StorageLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStorageLocation(
    @common.Param() params: StorageLocationWhereUniqueInput,
    @common.Body() data: StorageLocationUpdateInput
  ): Promise<StorageLocation | null> {
    try {
      return await this.service.updateStorageLocation({
        where: params,
        data: data,
        select: {
          address: true,
          city: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
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
  @swagger.ApiOkResponse({ type: StorageLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStorageLocation(
    @common.Param() params: StorageLocationWhereUniqueInput
  ): Promise<StorageLocation | null> {
    try {
      return await this.service.deleteStorageLocation({
        where: params,
        select: {
          address: true,
          city: true,
          createdAt: true,
          id: true,
          name: true,
          notes: true,
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
  @common.Get("/:id/inventoryUnits")
  @ApiNestedQuery(InventoryUnitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "InventoryUnit",
    action: "read",
    possession: "any",
  })
  async findInventoryUnits(
    @common.Req() request: Request,
    @common.Param() params: StorageLocationWhereUniqueInput
  ): Promise<InventoryUnit[]> {
    const query = plainToClass(InventoryUnitFindManyArgs, request.query);
    const results = await this.service.findInventoryUnits(params.id, {
      ...query,
      select: {
        acquisitionDate: true,

        component: {
          select: {
            id: true,
          },
        },

        condition: true,
        createdAt: true,

        disposition: {
          select: {
            id: true,
          },
        },

        expense: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,
        serialNumber: true,

        storageLocation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        use: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventoryUnits")
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "update",
    possession: "any",
  })
  async connectInventoryUnits(
    @common.Param() params: StorageLocationWhereUniqueInput,
    @common.Body() body: InventoryUnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryUnits: {
        connect: body,
      },
    };
    await this.service.updateStorageLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventoryUnits")
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "update",
    possession: "any",
  })
  async updateInventoryUnits(
    @common.Param() params: StorageLocationWhereUniqueInput,
    @common.Body() body: InventoryUnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryUnits: {
        set: body,
      },
    };
    await this.service.updateStorageLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventoryUnits")
  @nestAccessControl.UseRoles({
    resource: "StorageLocation",
    action: "update",
    possession: "any",
  })
  async disconnectInventoryUnits(
    @common.Param() params: StorageLocationWhereUniqueInput,
    @common.Body() body: InventoryUnitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventoryUnits: {
        disconnect: body,
      },
    };
    await this.service.updateStorageLocation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
