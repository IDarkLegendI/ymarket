import {ApiError} from "../exceptions/api-error";
import {NextFunction, Request, Response} from "express";

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    res.status(500).json({message: 'Непредвиденная ошибка'})
}