import {dbRouter} from "../database/db";
import {Logger} from "../modules/logger";
import {ApiError} from "../exceptions/api-error";

interface iSpecifications {
	param?: string
}

interface iImages {
	urlImg?: string
}

export class ProductDto {
	name: string
	price: number
	description: string
	specifications: iSpecifications
	images: iImages
	async query(data: any){
		this.name = data[0].name
		this.price = +data[0].price
		this.description = data[0].description
		this.specifications = JSON.parse(data[0].specifications)
		this.images = JSON.parse(data[0].images)
	}

	constructor(data: any) {
		this.query(data)
	}
}