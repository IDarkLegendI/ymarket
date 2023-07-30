import {Nitro} from "nitropack";
import * as mysql from "mysql";

export let connectionMysql: mysql.Pool;

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
}