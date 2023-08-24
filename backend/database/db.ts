import mysql from "mysql"
import Config from "../config.js";

class DBRouter {
	private connection = mysql.createPool(Config.db);
	checkConnection()
	{
		this.connection.getConnection((e) => {
			if (e) 	{
				console.log("⛔[SERVER] -> DATABASE IS NOT WORKING");
				console.error(e);
			}
			else {
				console.log(`⚡️[SERVER] -> DATABASE IS WORKING`);
			}
		});
	}
	// Техническая функция
	dbQuery(query: any) {
		return new Promise( (r, j) => this.connection.query(query, null, (err, data) => {
			if (err) {
				console.error(query);
				return j(err);
			}
			r(data);
		}))
	}

	// Рабочая функция
	async query(query: any) {
		try {
			const start = new Date().getTime();
			const data = await this.dbQuery(query);
			const time = new Date().getTime() - start;
			if (time >= 500) {
				console.warn(`'${query}' ends with: ${time / 1000}s`);
			}
			else {
				console.log(`'${query}' ends with: ${time / 1000}s`);
			}
			return data;
		}
		catch (e)
		{
			console.error(`DBRouter.query --> ${e}`)
			return null;
		}
	}
}

let dbRouter = new DBRouter();

export {dbRouter};