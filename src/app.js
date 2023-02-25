import express from "express";
import morgan from "morgan";
//Routes
import usersRoutes from "./routes/users.routes";
import config from "./config";
const app = express();

//settings
app.set("port", config.portserver);

//middelwares
app.use(morgan("dev"));

//routes
app.use("/api/users", usersRoutes);

export default app;
