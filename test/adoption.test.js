import { jest } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";
import AdoptionService from "../src/services/adoption.service.js";


describe("Adoption Router - Functional tests with fakes and mocks", () => {
  beforeEach(() => {
    AdoptionService.clearFakeData();
    jest.restoreAllMocks();
  });

  describe("POST /api/adoption", () => {
    test("debe crear una adopción correctamente", async () => {
      const response = await request(app)
        .post("/api/adoption")
        .send({
          name: "Firulais",
          status: "pending"
        });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe("Firulais");
      expect(response.body.status).toBe("pending");
    });

    test("debe responder 400 cuando los datos son inválidos", async () => {
      const response = await request(app)
        .post("/api/adoption")
        .send({});

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty("error");
      expect(response.body.error).toBe("Invalid data");
    });

    test("debe responder 500 ante error interno del servidor usando mock", async () => {
      jest.spyOn(AdoptionService, "create").mockRejectedValueOnce(
        new Error("Internal server error")
      );

      const response = await request(app)
        .post("/api/adoption")
        .send({ name: "Firulais" });

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBe("Internal server error");
    });
  });

  describe("GET /api/adoption", () => {
    test("debe obtener todas las adopciones", async () => {
      await AdoptionService.create({ name: "Firulais" });
      await AdoptionService.create({ name: "Luna" });

      const response = await request(app).get("/api/adoption");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
    });

    test("debe responder 500 si falla el servicio usando mock", async () => {
      jest.spyOn(AdoptionService, "getAll").mockRejectedValueOnce(
        new Error("Service error")
      );

      const response = await request(app).get("/api/adoption");

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBe("Service error");
    });
  });

  describe("GET /api/adoption/:id", () => {
    test("debe obtener una adopción por ID", async () => {
      const created = await AdoptionService.create({ name: "Toby" });

      const response = await request(app).get(`/api/adoption/${created.id}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.id).toBe(created.id);
      expect(response.body.name).toBe("Toby");
    });

    test("debe responder 404 si la adopción no existe", async () => {
      const response = await request(app).get("/api/adoption/999");

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe("Adoption not found");
    });
  });

  describe("PUT /api/adoption/:id", () => {
    test("debe actualizar una adopción existente", async () => {
      const created = await AdoptionService.create({ name: "Milo" });

      const response = await request(app)
        .put(`/api/adoption/${created.id}`)
        .send({
          name: "Milo actualizado",
          status: "approved"
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe("Milo actualizado");
      expect(response.body.status).toBe("approved");
    });

    test("debe responder 404 si intenta actualizar una adopción inexistente", async () => {
      const response = await request(app)
        .put("/api/adoption/999")
        .send({ name: "No existe" });

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe("Adoption not found");
    });
  });

  describe("DELETE /api/adoption/:id", () => {
    test("debe eliminar una adopción existente", async () => {
      const created = await AdoptionService.create({ name: "Rocky" });

      const response = await request(app).delete(`/api/adoption/${created.id}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Adoption deleted successfully");
      expect(response.body.adoption.id).toBe(created.id);
    });

    test("debe responder 404 si intenta eliminar una adopción inexistente", async () => {
      const response = await request(app).delete("/api/adoption/999");

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe("Adoption not found");
    });
  });
});