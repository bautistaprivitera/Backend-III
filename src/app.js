import express from "express";
import adoptionRouter from "./routes/adoption.router.js";
import swaggerUi from "swagger-ui-express";
import specs from "./docs/swagger.js";

const app = express();

app.use(express.json());

app.use("/api/adoption", adoptionRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;