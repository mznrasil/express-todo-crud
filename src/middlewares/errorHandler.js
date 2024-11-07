"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../errors");
const errorHandler = (error, req, res, next) => {
    console.log(req.method, req.url, error.name, error.message);
    if (error instanceof errors_1.NotFoundError) {
        res.status(404).json({ error: error.message });
        return;
    }
    res.status(500).json({ error: "Internal server error" });
    return;
};
exports.errorHandler = errorHandler;
