import {Router} from "express"
import {createTodo, deleteTodo, getTodoByID, getTodos, updateTodo} from "../controllers/todos";

export const todosRouter = Router();

todosRouter.get("/", getTodos);
todosRouter.post("/", createTodo);
todosRouter
    .route("/:id")
    .get(getTodoByID)
    .patch(updateTodo)
    .delete(deleteTodo);