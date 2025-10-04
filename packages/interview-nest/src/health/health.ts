export enum ZInterviewHealthStatus {
  Good = "good",
  Degraded = "degraded",
}

export interface IZInterviewHealth {
  status: ZInterviewHealthStatus;
}

export class ZInterviewHealthBuilder {
  private _health: IZInterviewHealth = { status: ZInterviewHealthStatus.Good };

  public status(value: ZInterviewHealthStatus) {
    this._health.status = value;
    return this;
  }

  public good = this.status.bind(this, ZInterviewHealthStatus.Good);
  public degraded = this.status.bind(this, ZInterviewHealthStatus.Degraded);

  public build() {
    return structuredClone(this._health);
  }
}
