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
			let { product } = req.body
			product = new ProductEl(product.name, product.price, product.description, product.specifications, product.images, product.business)


			await ProductService.add(product)
			res.send('Продукт добавлен!')
		}
		catch (e) {
			next(e)
		}
	}
}

export {ProductType}