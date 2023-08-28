import {Request, Response } from 'express';
import {Logger} from "../modules/logger";
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
			const {login, password} = req.body
			const userData = await UserService.login(login, password)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		}
		catch (e) {
			Logger.log("error", e)
			res.status(400).json()
		}
	}

	async logout(req: Request, res: Response) {
		try {
			const {refreshToken} = req.cookies
			const token = await UserService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)
		}
		catch (e){
			Logger.log("error", e)
			res.status(400).json()
		}
	}

	async refresh(req: Request, res: Response) {
		try {
			const {refreshToken} = req.cookies
			const userData = await UserService.refresh(refreshToken)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		}
		catch (e){
			Logger.log("error", e)
			res.status(400).json()
		}
	}
}