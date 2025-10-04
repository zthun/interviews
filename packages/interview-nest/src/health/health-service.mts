import { ZInterviewHealthBuilder, type IZInterviewHealth } from "./health.js";

export const ZInterviewHealthServiceToken = Symbol(
  "z-interview-health-service",
);

export interface IZInterviewHealthService {
  list(): Promise<IZInterviewHealth[]>;
}

export class ZInterviewHealthService implements IZInterviewHealthService {
  public list(): Promise<IZInterviewHealth[]> {
    return Promise.resolve([new ZInterviewHealthBuilder().good().build()]);
  }
}
