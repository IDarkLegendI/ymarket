import { RowDataPacket } from "mysql2"

export interface IUser{
    firstName: string,
    lastName: string,
    login: string,
    password: string
}