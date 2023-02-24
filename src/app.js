import express from "express";
import morgan from "morgan";
//Routes
import usersRoutes from "./routes/users.routes";

const app = express();

//settings
app.set("port", 4000);

//middelwares
app.use(morgan("dev"));

//routes
app.use("/api/users", usersRoutes);

export default app;
