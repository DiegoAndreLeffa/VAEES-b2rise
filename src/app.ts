import "express-async-errors";
import { handleErrors } from "./errors";
import express, { Application } from "express";
import { productsRouter } from "./routes";
import { userRouter } from "./routes/users/users.routes";
import { orderRoutes } from "./routes/purchaseOrders/purchaseOrders.routes";
// import swaggerUi from "swagger-ui-express";

// import swaggerDocs from "./swagger.json";

const app: Application = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/users", userRouter);
app.use("/orders", orderRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(handleErrors);

export default app;
