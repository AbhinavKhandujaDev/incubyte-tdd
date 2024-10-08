import { expect } from "chai";
import add from "./add.js";

describe("add", function () {
  it("should add positive numbers", function () {
    expect(add("1,2,3")).to.equal(6);
  });

  it("should add positive numbers with delimiter", function () {
    expect(add("//|1|2\n|3\n|10")).to.equal(16);
  });

  it("should output 0", function () {
    expect(add("//|")).to.equal(0);
    expect(add("")).to.equal(0);
  });

  it("throw error on negative number", function () {
    expect(() => add("//|1|2\n|3\n|-10")).to.throw("Found negative number");
  });

  it("throw error on non numeric character", function () {
    expect(() => add("//|1|2\n|3\n|abc")).to.throw(
      "Found non numeric character"
    );
  });
});
