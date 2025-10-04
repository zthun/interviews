import type { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { afterEach, describe, expect, it } from "vitest";
import { ZInterviewModule } from "./app.mjs";

describe("ZInterviewModule", () => {
  let _target: INestApplication<any> | undefined;

  afterEach(async () => {
    await _target?.close();
  });

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({
      imports: [ZInterviewModule],
    }).compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  it("should create the module", async () => {
    // Arrange.
    // Act.
    const target = await createTestTarget();

    // Assert.
    expect(target).toBeTruthy();
  });
});
