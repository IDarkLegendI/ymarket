import {NextFunction, Request, Response} from "express";
import {dbRouter} from "../database/db";
import {ApiError} from "../exceptions/api-error";
import {ProductService} from "../services/productService";
import {body, check} from "express-validator";

export class ProductController {
	static async getProduct(req: Request, res: Response, next: NextFunction)
	{
		try {
			const {itemId} = req.params
			let product = await ProductService.get(itemId)
			res.json(product)
		}
		catch (e) {
			next(e)
		}
		// res.send(req.params);
	}

	static async addProduct(req: Request, res: Response, next: NextFunction)
	{
		try {
			console.log(req.body)
			const dataKeys = Object.keys(req.body['data'])
			dataKeys.forEach(key => {
				ProductService.checkInputTextProduct(key, req.body.data[key])
			})
			res.send('addProduct IS WORKING!')
		}
		catch (e) {
			next(e)
		}
	}
}