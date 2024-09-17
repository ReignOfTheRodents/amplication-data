import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryUnitServiceBase } from "./base/inventoryUnit.service.base";

@Injectable()
export class InventoryUnitService extends InventoryUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
