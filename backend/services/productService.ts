import {dbRouter} from "../database/db";
import {ApiError} from "../exceptions/api-error";
import {ValidService} from "./validService";
import {ProductDto} from "../dto/productdto";
import {ProductType} from "../controllers/productController";

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

	static async add(product: {[index in ProductType]: string})
	{
		const data = await dbRouter.query(`INSERT INTO products (name, price, description, specifications, images, business) VALUES 
												('${product.name}', '${product.price}', '${product.description}', '${product.specifications}', 
												'${product.images}', '${product.business}')`)
		if (data === null) throw ApiError.BadRequest(`Ошибка внесения товара ${product.name}`)
	}

	/**
	 * Валидация текста обычных, текстовых полей
	 * @return с убранными пробелами
	 * */
	static checkInputTextProduct(key: string, text: string)
	{
		if(text.length < 1) throw ApiError.BadRequest(`Поле ${key} пустое`)
		if(text.length > 64) throw ApiError.BadRequest(`Поле ${key} содержит слишком большое количество символов`)
		if(!ValidService.isDataValid(text)) throw ApiError.BadRequest(`Поле ${key} содержит запрещенные символы`)
		return text.trim()
	}
}