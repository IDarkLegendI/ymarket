import {dbRouter} from "../database/db";
import {Logger} from "../modules/logger";

export class UserDto {
    id: number
    login: string
    firstName: string
    lastName: string

    async queries(login: string){
        const data = await dbRouter.query(`SELECT id, firstName, lastName FROM users WHERE login = '${login}'`)
        this.id = data[0].id
        this.firstName = data[0].firstName
        this.lastName = data[0].lastName
    }

    constructor(login: string) {
        const data = this.queries(login)
        this.login = login
    }
}