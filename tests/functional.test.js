const request = require("supertest");
const { app } = require("../server");
const axios = require("axios");

jest.mock("axios");

describe("Functional Tests - Chat Flow", () => {
  test("POST /chat should process normal conversation", async () => {
    axios.post.mockResolvedValue({
      data: {
        choices: [{ message: { content: "Olá! Como posso ajudar?" } }]
      }
    });

    const response = await request(app)
      .post("/chat")
      .send({ message: "Oi", sessionId: "test-session" });

    expect(response.status).toBe(200);
    expect(response.body.reply).toBe("Olá! Como posso ajudar?");
    expect(response.body.sessionId).toBe("test-session");
  });

  test("POST /chat should handle tool calls (calculate)", async () => {
    // 1st call: Groq returns TOOL: calculate | 5*5
    axios.post.mockResolvedValueOnce({
      data: {
        choices: [{ message: { content: "TOOL: calculate | 5*5" } }]
      }
    });

    const response = await request(app)
      .post("/chat")
      .send({ message: "Quanto é 5 vezes 5?", sessionId: "test-session-2" });

    expect(response.status).toBe(200);
    expect(response.body.reply).toContain("25");
  });
});
