import { test } from "@playwright/test";

test.describe("FORM PAGE", () => {
  test.beforeAll(() => {
    console.log("beforeAll");
  });
  test.beforeEach(() => {
    console.log("beforeEach");
  });
  test.afterEach(() => {
    console.log("afterEach");
  });
  test.afterAll(() => {
    console.log("afterAll");
  });

  test("Test1", () => {
    console.log("test1");
  });
  test("Test2", () => {
    console.log("test2");
  });
});