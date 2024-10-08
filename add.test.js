import { expect } from "chai";
import add from "./add.js";

describe("add", function () {
  it("should add positive numbers", function () {
    expect(add("1,2,3")).to.equal(6);
  });
});
