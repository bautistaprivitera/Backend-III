import { Router } from "express";
import AdoptionController from "../controllers/adoption.controller.js";

const router = Router();

/**
 * @swagger
 * /api/adoption:
 *   post:
 *     summary: Crear adopción
 *     tags: [Adoption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Creado correctamente
 */
router.post("/", AdoptionController.create);

/**
 * @swagger
 * /api/adoption:
 *   get:
 *     summary: Obtener adopciones
 *     tags: [Adoption]
 *     responses:
 *       200:
 *         description: Lista de adopciones
 */
router.get("/", AdoptionController.getAll);

export default router;