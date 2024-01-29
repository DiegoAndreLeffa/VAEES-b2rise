import "express-async-errors";
import { handleErrors } from "./errors";
import express, { Application } from "express";
// import swaggerUi from "swagger-ui-express";

// import swaggerDocs from "./swagger.json";

const app: Application = express();

app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(handleErrors);

export default app;
