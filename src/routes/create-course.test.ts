import { test, expect } from "vitest";
import requestTest from "supertest";
import { server } from "../app";
import { faker } from "@faker-js/faker";

test("create a course", async () => {
  await server.ready();

  const response = await requestTest(server.server)
    .post("/courses")
    .set("Content-Type", "application/json")
    .send({ title: faker.lorem.words(4) });

  expect(response.status).toEqual(201);
  expect(response.body).toEqual({
    courseId: expect.any(String),
  });
});
