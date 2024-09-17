/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Disposition as PrismaDisposition,
  InventoryUnit as PrismaInventoryUnit,
} from "@prisma/client";

export class DispositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DispositionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.disposition.count(args);
  }

  async dispositions(
    args: Prisma.DispositionFindManyArgs
  ): Promise<PrismaDisposition[]> {
    return this.prisma.disposition.findMany(args);
  }
  async disposition(
    args: Prisma.DispositionFindUniqueArgs
  ): Promise<PrismaDisposition | null> {
    return this.prisma.disposition.findUnique(args);
  }
  async createDisposition(
    args: Prisma.DispositionCreateArgs
  ): Promise<PrismaDisposition> {
    return this.prisma.disposition.create(args);
  }
  async updateDisposition(
    args: Prisma.DispositionUpdateArgs
  ): Promise<PrismaDisposition> {
    return this.prisma.disposition.update(args);
  }
  async deleteDisposition(
    args: Prisma.DispositionDeleteArgs
  ): Promise<PrismaDisposition> {
    return this.prisma.disposition.delete(args);
  }

  async findInventoryUnits(
    parentId: string,
    args: Prisma.InventoryUnitFindManyArgs
  ): Promise<PrismaInventoryUnit[]> {
    return this.prisma.disposition
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .inventoryUnits(args);
  }
}
