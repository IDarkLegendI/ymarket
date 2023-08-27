import {Request, Response } from 'express';
import {Logger} from "./modules/logger";
import {dbRouter} from "../database/db";
import {UserService} from "../services/userService";

export class AuthController {
	async registration(req: Request, res: Response) {
		try {
			const {firstName, lastName, login, password} = req.body
			const userData = await UserService.registration(firstName, lastName, login, password)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
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

	async logout(req: Request, res: Response) {
		try {

		}
		catch (e){

		}
	}

	async activate(req: Request, res: Response) {
		try {

		}
		catch (e){

		}
	}

	async refresh(req: Request, res: Response) {
		try {

		}
		catch (e){

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