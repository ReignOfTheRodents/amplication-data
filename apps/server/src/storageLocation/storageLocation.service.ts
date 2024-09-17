import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StorageLocationServiceBase } from "./base/storageLocation.service.base";

@Injectable()
export class StorageLocationService extends StorageLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
