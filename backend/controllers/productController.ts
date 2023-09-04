import {NextFunction, Request, Response} from "express";
import {dbRouter} from "../database/db";
import {ApiError} from "../exceptions/api-error";
import {ProductService} from "../services/productService";

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
		// res.send(req.params);
	}

	static async addProduct(req: Request, res: Response, next: NextFunction)
	{
		try {
			console.log(req.body)
			const dataKeys = Object.keys(req.body['product']),
				product: {[index in ProductType]: string} = {
				name: "",
				price: "",
				description: "",
				specifications: "",
				images: "",
				business: ""
			}
			dataKeys.forEach(key =>
			{
				ProductService.checkInputTextProduct(key, req.body["product"][key])
				product[key] = req.body["product"][key]
			})

			await ProductService.add(product)
			res.send('addProduct IS WORKING!')
		}
		catch (e) {
			next(e)
		}
	}
}

export {ProductType}