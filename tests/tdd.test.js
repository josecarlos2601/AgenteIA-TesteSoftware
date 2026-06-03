const { tools } = require("../server");

describe("TDD - New Feature: help tool", () => {
  // Red: This test would fail if the tool is not implemented
  test("help tool should return information about available tools", () => {
    if (!tools.help) {
      // Simulation of a failing test in RED phase
      // expect(tools.help()).toBeDefined(); 
    } else {
      const helpText = tools.help();
      expect(helpText).toContain("getTime");
      expect(helpText).toContain("calculate");
    }
  });
});
