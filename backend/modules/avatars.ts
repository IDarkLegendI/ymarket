import {dbRouter} from "../database/db";
import {Logger} from "./logger";

enum eAvatarType {
	yandexURL,
}
export class Avatars {
	async addAvatar(type: eAvatarType, url: string)
	{
		try {
			let data = await dbRouter.query(`INSERT INTO avatars (type, url) VALUES ('${type}', '${url}')`)
			if (data === null) {
				Logger.log('error', `Ошибка внесения аватара`)
				return false
			}
			return true
		}
		catch (e) {
			Logger.log("error", e)
		}
	}

	async getAvatar(id: number)
	{
		let data = await dbRouter.query(`SELECT id FROM avatars WHERE id = '${id}'`)
	}
}