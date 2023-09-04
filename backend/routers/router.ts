import {Router} from "express";
import {ProductController} from "../controllers/productController";

export const router = Router()

router.get('/product/:itemId/', ProductController.getProduct)
// router.get('/business/:itemId/', controller.business)
// async business(req: Request, res: Response)
// {
// 	res.send(req.params);
// }