const request = require("supertest");
const { app } = require("../server");

describe("Integration Tests - API Endpoints", () => {
  test("GET /health should return 200 and status ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
    expect(response.body).toHaveProperty("timestamp");
  });

  test("POST /chat should return 400 if message is missing", async () => {
    const response = await request(app)
      .post("/chat")
      .send({});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Mensagem é obrigatória");
  });

  test("POST /chat should return 400 if message is empty string", async () => {
    const response = await request(app)
      .post("/chat")
      .send({ message: "   " });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Mensagem é obrigatória");
  });
});
