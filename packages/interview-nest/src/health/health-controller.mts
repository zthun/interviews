import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import type { IZInterviewHealthService } from "./health-service.mjs";
import { ZInterviewHealthServiceToken } from "./health-service.mjs";

@ApiTags("Health")
@Controller("health")
export class ZInterviewHealthController {
  public constructor(
    @Inject(ZInterviewHealthServiceToken)
    private readonly _healthService: IZInterviewHealthService,
  ) {}

  @Get()
  public get() {
    return this._healthService.list();
  }
}
