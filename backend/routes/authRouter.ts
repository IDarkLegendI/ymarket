import { Router } from "express";
import {AuthController} from "../controllers/authController";

export const authRouter = Router()
const controller = new AuthController()

authRouter.post('/registration', controller.registration)
authRouter.post('/login', controller.login)
authRouter.post('/logout', controller.logout)
authRouter.get('/refresh', controller.refresh)

