import { Module } from "@nestjs/common";
import { ZInterviewHealthModule } from "../health/health-module.mjs";

@Module({
  imports: [ZInterviewHealthModule],
})
export class ZInterviewModule {}
