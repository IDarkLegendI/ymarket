import {dbRouter} from "../database/db";
import {Logger} from "../controllers/modules/logger";

export class UserDto {
    id: number
    login: string
    firstName: string

    async queries(login: string){
        const id = await dbRouter.query(`SELECT id FROM users WHERE login = '${login}'`)
        const firstName = await dbRouter.query(`SELECT firstName FROM users WHERE login = '${login}'`)
        this.id = id[0]
        this.firstName = firstName[0]
    }

    constructor(login: string) {
        const data = this.queries(login)
        this.login = login
    }
}