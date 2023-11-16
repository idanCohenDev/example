import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainRouter } from "./routes/index.js";
dotenv.config();

const app = express();
app.use(cors({ origin: "*", methods: "*" }));
app.use(mainRouter);

const port = 3000;

app.listen(port, () => {
 return console.log(`Express server is listening on port ${port}`);
});
