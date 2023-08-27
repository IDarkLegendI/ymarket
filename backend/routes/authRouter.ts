import { Router } from "express";
import {AuthController} from "../controllers/authController";

export const router = Router()
const controller = new AuthController()

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/refresh', controller.refresh)

