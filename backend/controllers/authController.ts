import {Request, Response } from 'express';
import {Logger} from "../modules/logger";
import {dbRouter} from "../database/db";

export class AuthController {
	async registration(req: Request, res: Response) {
		try {
			const {firstName, lastName, login, password} = req.body
			console.log(firstName, lastName, login, password)
			let data = await dbRouter.query(`SELECT id FROM users WHERE login = '${login}'`)
			if (data[0]) return res.end('Такой аккаунт уже находится в базе данных')
			data = await dbRouter.query(`INSERT INTO users (firstName, lastName, login, password) VALUES ('${firstName}', '${lastName}', '${login}', '${password}')`)
			if (!data[0]) return false
			res.end('Пользователь добавлен в базу данных')
		}
		catch (e) {
			Logger.log("error", e)
			res.status(400).json()
		}
	}
	async login(req: Request, res: Response) {
		try {

		}
		catch (e) {
			Logger.log("error", e)
			res.status(400).json()
		}
	}
	async getUsers(req: Request, res: Response)
	{
		try {
			res.json('Ivan work!')
		}
		catch (e) {
			Logger.log("error", e)
			res.status(400).json()
		}
	}
}