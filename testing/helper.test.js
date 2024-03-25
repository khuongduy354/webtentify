const { validateSize, isFileNameOverlap } = require("../src/helper/index");

describe("validateSize", () => {
  test("size over 1000 byte is rejected", () => {
    const inp = { files: [{ size: 2000 }] };
    const limit = 1000;

    const res = validateSize(inp, limit);
    expect(res).toBe(false);
  });

  test("size under 1000 byte is accepted", () => {
    const inp = { files: [{ size: 900 }] };
    const limit = 1000;

    const res = validateSize(inp, limit);
    expect(res).toBe(true);
  });
});
