import {Router} from "express";
import {ProductController} from "../controllers/productController";

export const router = Router()
const controller = new ProductController()

router.get('/product/:itemId/', controller.getProduct)
// router.get('/business/:itemId/', controller.business)
// async business(req: Request, res: Response)
// {
// 	res.send(req.params);
// }