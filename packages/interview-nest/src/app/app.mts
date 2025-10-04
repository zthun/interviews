import { Module } from "@nestjs/common";
import { ZInterviewHealthModule } from "../health/health-module.mjs";
import { ZInterviewTimeModule } from "../time/time-module.mjs";

@Module({
  imports: [ZInterviewHealthModule, ZInterviewTimeModule],
})
export class ZInterviewModule {}
