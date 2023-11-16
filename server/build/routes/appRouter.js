import { t } from "../trpc";
import { usersRouter } from "./users";
export var appRouter = t.router({
    sayHi: t.procedure.query(function () {
        return "Hi";
    }),
    logToServer: t.procedure
        .input(function (v) {
        if (typeof v === "string")
            return v;
        throw new Error("Expected a string");
    })
        .mutation(function (req) {
        console.log("Client says:", req.input);
        return true;
    }),
    users: usersRouter,
});
