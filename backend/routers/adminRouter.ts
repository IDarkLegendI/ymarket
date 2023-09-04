import {Router} from "express";
import {ProductController} from "../controllers/productController";

export const adminRouter = Router()

adminRouter.post('/product', ProductController.addProduct)