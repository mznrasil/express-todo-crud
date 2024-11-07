"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("./todos");
const router = (0, express_1.Router)();
router.use("/todos", todos_1.todosRouter);
exports.default = router;
