import { padLeadingZeros } from "../../../src/utils/Helper";

describe("Helper", () => {
  it("should have a leading zero is less than 100", () => {
    const test = 10;
    const resp = padLeadingZeros(test, 3);
    expect(resp).toBe(`0${test}`);
  });
});
