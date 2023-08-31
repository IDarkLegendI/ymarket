import {Router} from "express";
import {AuthController} from "../controllers/authController";
import {RouterController} from "../controllers/routerController";

export const router = Router()
const controller = new RouterController()

router.get('/product/:itemId/', controller.product)
router.get('/business/:itemId/', controller.business)