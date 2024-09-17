import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CountyServiceBase } from "./base/county.service.base";

@Injectable()
export class CountyService extends CountyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
