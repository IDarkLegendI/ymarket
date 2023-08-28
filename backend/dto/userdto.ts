import {dbRouter} from "../database/db";
import {Logger} from "../modules/logger";

export class UserDto {
    id: number
    login: string
    firstName: string

    async queries(login: string){
        const data = await dbRouter.query(`SELECT id, firstName FROM users WHERE login = '${login}'`)
        this.id = data[0].id
        this.firstName = data[0].firstName
    }

    constructor(login: string) {
        const data = this.queries(login)
        this.login = login
    }
}