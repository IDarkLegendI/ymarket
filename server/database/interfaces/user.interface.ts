import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket{
    firstName: string,
    lastName: string,
    login: string,
    password: string
}