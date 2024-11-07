import {Request, Response, NextFunction} from "express"
import {NotFoundError} from "../errors";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, error.name, error.message);

    if (error instanceof NotFoundError) {
        res.status(404).json({ error: error.message });
        return
    }

    res.status(500).json({ error: "Internal server error" });
    return
}