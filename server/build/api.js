import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routes/appRouter.js";
var app = express();
app.use(cors({ origin: "*" }));
app.use("/trpc", createExpressMiddleware({ router: appRouter }));
var port = 3000;
app.listen(port, function () {
    return console.log("Express server is listening at http://localhost:".concat(port, " \uD83D\uDE80"));
});
