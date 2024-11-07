// import { Request, Response, NextFunction } from "express";

// export interface RequestWithTodo extends Request {
//     todo?: Todo;
// }
//
// export const withTodo = async (req: RequestWithTodo, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     if (!id) {
//         return res.status(400).json({ error: "Id is required" }) as any;
//     }
//
//     const todo = getTodoByID(parseInt(id));
//     if (!todo) {
//         return res.status(404).json({ error: "Todo not found" }) as any;
//     }
//
//     req.todo = todo;
//     next();
// }