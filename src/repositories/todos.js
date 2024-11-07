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
exports.TodoRepository = void 0;
const todos_1 = require("../models/todos");
class TodoRepository {
    create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todos_1.Todo.create(todo);
        });
    }
    findByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return todos_1.Todo.findById(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return todos_1.Todo.find();
        });
    }
    update(id, todo) {
        return __awaiter(this, void 0, void 0, function* () {
            return todos_1.Todo.findByIdAndUpdate(id, todo, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield todos_1.Todo.findByIdAndDelete(id);
        });
    }
}
exports.TodoRepository = TodoRepository;
