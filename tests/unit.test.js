const { tools } = require("../server");

describe("Unit Tests - Tools", () => {
  test("getTime should return a string with current time", () => {
    const time = tools.getTime();
    expect(typeof time).toBe("string");
    expect(time).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/); // Matches date format
  });

  test("calculate should correctly calculate math expressions", () => {
    expect(tools.calculate("2 + 2")).toBe("4");
    expect(tools.calculate("10 * 5")).toBe("50");
    expect(tools.calculate("(10 + 2) / 3")).toBe("4");
  });

  test("calculate should reject invalid expressions", () => {
    expect(tools.calculate("process.exit()")).toBe("Expressão inválida");
    expect(tools.calculate("require('fs')")).toBe("Expressão inválida");
    expect(tools.calculate("1 + 1; alert(1)")).toBe("Expressão inválida");
  });

  test("calculate should handle errors gracefully", () => {
    expect(tools.calculate("1 / 0")).toBe("Infinity"); // JS math behavior
    expect(tools.calculate("2 ++ 2")).toBe("Erro ao calcular");
  });
});
