import type { IZCircusDriver, IZCircusSetup } from "@zthun/cirque";
import { ZCircusBy } from "@zthun/cirque";
import { ZCircusSetupRenderer } from "@zthun/cirque-du-react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { ZTimePageComponentModel } from "./time-page.cm.js";
import { ZTimePage } from "./time-page.js";

describe("ZTimePage", () => {
  const time = new Date(2015, 10, 14, 12, 32, 64, 222);
  let _renderer: IZCircusSetup | undefined;
  let _driver: IZCircusDriver | undefined;

  beforeAll(() => {
    vi.setSystemTime(time);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  afterEach(async () => {
    await _driver?.destroy?.call(_driver);
    await _renderer?.destroy?.call(_renderer);
  });

  const createTestTarget = async () => {
    const element = <ZTimePage />;

    _renderer = new ZCircusSetupRenderer(element);
    _driver = await _renderer.setup();

    return ZCircusBy.first(_driver, ZTimePageComponentModel);
  };

  describe("Time", () => {
    it("should display the current time", async () => {
      // Arrange.
      const expected = time.toJSON();
      const target = await createTestTarget();

      // Act.
      const actual = await target.time();

      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
