import { IUser } from "../interfaces/user.interface"
import {connectionMysql, DBRouter} from "~/server";
import {Nitro} from "nitropack";

let db = new DBRouter()
let UserDB: any;
export default async (_nitroApp: Nitro) => {
    class UserDB {
        static async create(user: IUser) {
            await db.query(`INSERT INTO users (firstName, lastName, login, password) VALUES (${user.firstName}, ${user.lastName},${user.login}, ${user.password})`)
        }
    }
}

UserDB.create({firstName: '1', lastName: '2', login: '3', password: '4'})