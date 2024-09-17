import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DispositionModuleBase } from "./base/disposition.module.base";
import { DispositionService } from "./disposition.service";
import { DispositionController } from "./disposition.controller";
import { DispositionResolver } from "./disposition.resolver";

@Module({
  imports: [DispositionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DispositionController],
  providers: [DispositionService, DispositionResolver],
  exports: [DispositionService],
})
export class DispositionModule {}
