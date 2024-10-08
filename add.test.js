import { expect } from "chai";
import add from "./add.js";

describe("add", function () {
  it("should add positive numbers", function () {
    expect(add("1,2,3")).to.equal(6);
  });

  it("should add positive numbers with delimiter", function () {
    expect(add("//|1|2\n|3\n|10")).to.equal(16);
  });

  it("should handle new lines between numbers", function () {
    expect(add("1\n\n2,3")).to.equal(6);
  });

  it("should output 0", function () {
    expect(add("//|")).to.equal(0);
    expect(add("")).to.equal(0);
  });

  it("throw error on negative number", function () {
    expect(() => add("//|1|2\n|3\n|-10|-11")).to.Throw(
      Error,
      "Negative numbers not allowed -10,-11"
    );
  });

  it("throw error on non numeric character", function () {
    expect(() => add("//|1|2\n|3\n|abc")).to.Throw(
      Error,
      "Found non numeric character"
    );
  });
});
