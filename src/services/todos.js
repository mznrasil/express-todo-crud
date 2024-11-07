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
exports.TodoService = void 0;
const errors_1 = require("../errors");
class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    createTodo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.create(data);
        });
    }
    getTodoByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.todoRepository.findByID(id);
            if (!todo) {
                throw new errors_1.NotFoundError("Todo", id);
            }
            return todo;
        });
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.todoRepository.findAll();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.todoRepository.update(id, data);
            if (!todo) {
                throw new errors_1.NotFoundError("Todo", id);
            }
            return todo;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.todoRepository.findByID(id);
            if (!todo) {
                throw new errors_1.NotFoundError("Todo", id);
            }
            return yield this.todoRepository.delete(id);
        });
    }
}
exports.TodoService = TodoService;
