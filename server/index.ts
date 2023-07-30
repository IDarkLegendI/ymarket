import {Nitro} from "nitropack";
import * as mysql from "mysql";

export let connectionMysql: mysql.Pool;
export let DBRouter: any;

export default async (_nitroApp: Nitro) => {
    const connection =  mysql.createPool({
        host			:	"192.168.100.150",
        user			: 	"vmSAdmin",
        password		: 	"xrenTebeXaxaxa111",
        database		:	"velomaster",
        port: 3306
    });

    connection.getConnection(function(e) {
        if (e) 	{
            console.log("DATABASE IS NOT WORKING");
            console.error(e);
        }
        else {
            console.log(`DATABASE IS WORKING`);
        }
    });

    class DBRouter {
        // Техническая функция
        dbQuery(query: string | mysql.QueryOptions) {
            return new Promise( (r, j) => connection.query(query, null, (err, data) => {
                if (err) {
                    console.error(query);
                    return j(err);
                }
                r(data);
            }))
        }

        // Функция для использования
        async query(query: string | mysql.QueryOptions) {
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
}