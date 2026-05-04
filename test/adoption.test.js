import request from "supertest";
import app from "../src/app.js";

describe("Adoption API", () => {

  test("POST /api/adoption - success", async () => {
    const res = await request(app)
      .post("/api/adoption")
      .send({ name: "Firulais" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Firulais");
  });

  test("POST /api/adoption - invalid data", async () => {
    const res = await request(app)
      .post("/api/adoption")
      .send({});

    expect(res.statusCode).toBe(500);
  });

  test("GET /api/adoption", async () => {
    const res = await request(app).get("/api/adoption");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});