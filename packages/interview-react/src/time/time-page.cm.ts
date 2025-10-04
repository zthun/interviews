import { ZCircusComponentModel } from "@zthun/cirque";

export class ZTimePageComponentModel extends ZCircusComponentModel {
  public static readonly Selector = ".ZTimePage-root";

  public time(): Promise<string | null> {
    return this.driver.attribute("data-time");
  }
}
