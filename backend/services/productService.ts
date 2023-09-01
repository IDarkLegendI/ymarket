import {dbRouter} from "../database/db";
import {ApiError} from "../exceptions/api-error";
import {ValidService} from "./validService";
import {ProductDto} from "../dto/productdto";

export class ProductService {
	static async get(itemId: string)
	{
		if (!ValidService.isNumberValid(itemId)) throw ApiError.BadRequest('Номер товара указан некорректно!')
		const data = await dbRouter.query(`SELECT * FROM products WHERE id = '${itemId}'`)
		if (data[0] === undefined) throw ApiError.BadRequest('Такого товара не найдено!')
		let product = new ProductDto(data)
		console.log(`data: ${data}`)
		console.log(`data[0]: ${data[0]}`)

		return {...product}
	}
}