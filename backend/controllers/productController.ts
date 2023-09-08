import {NextFunction, Request, Response} from "express";
import {dbRouter} from "../database/db";
import {ApiError} from "../exceptions/api-error";
import {ProductEl, ProductService} from "../services/productService";

type ProductType = 'name' | 'price' | 'description' | 'specifications' | 'images' | 'business'

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
	}

	static async addProduct(req: Request, res: Response, next: NextFunction)
	{
		try {
			console.log(req.body)
			let product = new ProductEl(req.body.name, req.body.price, req.body.description, req.body.specifications, req.body.images, req.body.business)


			await ProductService.add(product)
			res.send('addProduct IS WORKING!')
		}
		catch (e) {
			next(e)
		}
	}
}

export {ProductType}