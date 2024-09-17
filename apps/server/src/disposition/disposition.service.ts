import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DispositionServiceBase } from "./base/disposition.service.base";

@Injectable()
export class DispositionService extends DispositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
