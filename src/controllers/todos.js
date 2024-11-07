"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.getTodoByID = exports.createTodo = void 0;
const todos_1 = require("../repositories/todos");
const todos_2 = require("../services/todos");
const asyncHandler_1 = require("../utils/asyncHandler");
const todoRepository = new todos_1.TodoRepository();
const todoService = new todos_2.TodoService(todoRepository);
exports.createTodo = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, completed } = req.body;
    const todo = yield todoService.createTodo({ title, completed });
    res.status(201).json(todo);
}));
exports.getTodoByID = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield todoService.getTodoByID(id);
    res.status(200).json(todo);
}));
exports.getTodos = (0, asyncHandler_1.asyncHandler)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todoService.getTodos();
    res.status(200).json({ data: todos });
}));
exports.updateTodo = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = yield todoService.update(id, { title, completed });
    res.status(200).json(todo);
}));
exports.deleteTodo = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todoService.delete(id);
    res.status(204).json();
}));
