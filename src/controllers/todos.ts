import { Request, Response } from "express"
import {TodoRepository} from "../repositories/todos";
import {TodoService} from "../services/todos";
import {asyncHandler} from "../utils/asyncHandler";

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
    const { title, completed } = req.body;
    const todo = await todoService.createTodo({title, completed});
    res.status(201).json(todo);
});

export const getTodoByID = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await todoService.getTodoByID(id);
    res.status(200).json(todo);
})

export const getTodos = asyncHandler(async (_: Request, res: Response) => {
    const todos = await todoService.getTodos();
    res.status(200).json({ data: todos });
});

export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await todoService.update(id, { title, completed });
    res.status(200).json(todo);
})

export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await todoService.delete(id);
    res.status(204).json();
})