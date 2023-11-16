import { t } from "../trpc";
export var usersRouter = t.router({
    getUser: t.procedure.query(function () {
        return { id: 1, name: "Idan" };
    }),
});
