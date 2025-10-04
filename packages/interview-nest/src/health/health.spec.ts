import type { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { ZHttpCodeSuccess } from "@zthun/webigail-http";
import request from "supertest";
import { afterEach, describe, expect, it } from "vitest";
import { ZInterviewHealthModule } from "./health-module.mjs";
import { ZInterviewHealthBuilder } from "./health.js";

describe("ZInterviewHealthModule", () => {
  const endpoint = "health";

  let _target: INestApplication<any> | undefined;

  afterEach(async () => {
    await _target?.close();
  });

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({
      imports: [ZInterviewHealthModule],
    }).compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  describe("GET", () => {
    it("should return 200 (OK) with good status", async () => {
      // Arrange.
      const target = await createTestTarget();
      const url = `/${endpoint}`;
      const expected = [new ZInterviewHealthBuilder().good().build()];

      // Act.
      const actual = await request(target.getHttpServer()).get(url);

      // Assert.
      expect(actual.status).toEqual(ZHttpCodeSuccess.OK);
      expect(actual.body).toEqual(expected);
    });
  });
});
