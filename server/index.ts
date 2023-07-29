import {Nitro} from "nitropack";
import * as mysql from "mysql2/promise";

export let connectionMysql: mysql.Pool;

export default async (_nitroApp: Nitro) => {
    try {
        connectionMysql = await mysql.createPool({
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'ymarket'
        })
        console.log(`hui`)
    }
    catch (e) {
        console.log(`Error MySQL! ${e}`)
    }
}