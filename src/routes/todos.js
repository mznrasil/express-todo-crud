"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
exports.todosRouter = (0, express_1.Router)();
exports.todosRouter.get("/", todos_1.getTodos);
exports.todosRouter.post("/", todos_1.createTodo);
exports.todosRouter
    .route("/:id")
    .get(todos_1.getTodoByID)
    .patch(todos_1.updateTodo)
    .delete(todos_1.deleteTodo);
