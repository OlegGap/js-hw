import { add } from "./add";

describe("add function", () => {
  it("Should add two umbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("Should not add string", () => {
    expect(add(1, "2")).toBe(null);
  });
  test("should not add object", () => {
    expect(add(1, { one: 1 })).toBe(null);
  });
  test("should add arguments", () => {
    expect(add(1, 3, 4, 5)).toBe(13);
  });
});
