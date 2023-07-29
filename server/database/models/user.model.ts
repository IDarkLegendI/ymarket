import { IUser } from "../interfaces/user.interface"
import {connectionMysql} from "~/server";

export class UserDB {
    static async create(user: IUser) {
        await connectionMysql.query(`INSERT INTO users (firstName, lastName, login, password) VALUES (${user.firstName}, ${user.lastName},${user.login}, ${user.password})`)
    }
}