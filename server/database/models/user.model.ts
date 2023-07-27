import connectionMysql from "~/server/database/mysql";
import { IUser } from "../interfaces/user.interface"
import { OkPacket } from "mysql2"

export class UserDB {
    create(user: IUser): Promise<IUser> {
        return new Promise((resolve, reject) => {
            connectionMysql.query<OkPacket>(
                "INSERT INTO users (firstName, lastName, login, password) VALUES (?, ?, ?, ?)",
                [user.firstName, user.lastName, user.login, user.password]
            )
        })
    }
}