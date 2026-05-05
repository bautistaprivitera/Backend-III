import { Router } from "express";
import AdoptionController from "../controllers/adoption.controller.js";

const router = Router();

/**
 * @swagger
 * /api/adoption:
 *   post:
 *     summary: Crear una adopción
 *     tags: [Adoption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Firulais
 *               status:
 *                 type: string
 *                 example: pending
 *     responses:
 *       201:
 *         description: Adopción creada correctamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/", AdoptionController.create);

/**
 * @swagger
 * /api/adoption:
 *   get:
 *     summary: Obtener todas las adopciones
 *     tags: [Adoption]
 *     responses:
 *       200:
 *         description: Lista de adopciones
 */
router.get("/", AdoptionController.getAll);

/**
 * @swagger
 * /api/adoption/{id}:
 *   get:
 *     summary: Obtener una adopción por ID
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */
router.get("/:id", AdoptionController.getById);

/**
 * @swagger
 * /api/adoption/{id}:
 *   put:
 *     summary: Actualizar una adopción por ID
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Luna
 *               status:
 *                 type: string
 *                 example: approved
 *     responses:
 *       200:
 *         description: Adopción actualizada
 *       404:
 *         description: Adopción no encontrada
 */
router.put("/:id", AdoptionController.update);

/**
 * @swagger
 * /api/adoption/{id}:
 *   delete:
 *     summary: Eliminar una adopción por ID
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción eliminada
 *       404:
 *         description: Adopción no encontrada
 */
router.delete("/:id", AdoptionController.delete);

export default router;