import { describe, expect, it } from "vitest";
import { transformIf } from "./index";

describe("transformIf", () => {
  it("should return the transformed value when condition is true", () => {
    const value = 5;
    const transform = (v: number) => v * 2;
    const result = transformIf(true, value, transform);

    expect(result).toBe(10);
  });

  it("should return the original value when condition is false", () => {
    const value = 5;
    const transform = (v: number) => v * 2;
    const result = transformIf(false, value, transform);

    expect(result).toBe(5);
  });

  it("should work with string transformation", () => {
    const value = "hello";
    const transform = (v: string) => v.toUpperCase();
    const result = transformIf(true, value, transform);

    expect(result).toBe("HELLO");
  });

  it("should return the original value for strings when condition is false", () => {
    const value = "hello";
    const transform = (v: string) => v.toUpperCase();
    const result = transformIf(false, value, transform);

    expect(result).toBe("hello");
  });
});
