import { Module } from "@nestjs/common";
import { ZInterviewHealthController } from "./health-controller.mjs";
import {
  ZInterviewHealthService,
  ZInterviewHealthServiceToken,
} from "./health-service.mjs";

@Module({
  controllers: [ZInterviewHealthController],
  providers: [
    {
      provide: ZInterviewHealthServiceToken,
      useClass: ZInterviewHealthService,
    },
  ],
})
export class ZInterviewHealthModule {}
