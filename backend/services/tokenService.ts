import jwt from 'jsonwebtoken'
import {dbRouter} from "../database/db";

export class TokenService {
    static generateTokens (payload: {id: number ,login: string, firstName: string}) {
        const JWT_ACCESS_SECRET = 'ymarket-access-secret-key'
        const JWT_REFRESH_SECRET = 'ymarket-refresh-secret-key'
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, JWT_ACCESS_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }
    static async saveToken(userLogin: string, refreshToken: string) {
        await dbRouter.query(`UPDATE users SET refresh = '${refreshToken}' WHERE login = '${userLogin}'`)
    }
}