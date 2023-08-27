import jwt from 'jsonwebtoken'
import {dbRouter} from "../database/db";
import {Logger} from "../controllers/modules/logger";

export class TokenService {
    private static JWT_ACCESS_SECRET: string
    private static JWT_REFRESH_SECRET: string
    static generateTokens (payload: {id: number ,login: string, firstName: string}) {
        this.JWT_ACCESS_SECRET = 'ymarket-access-secret-key'
        const JWT_REFRESH_SECRET = 'ymarket-refresh-secret-key'
        const accessToken = jwt.sign(payload, this.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, this.JWT_ACCESS_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    static async saveToken(userLogin: string, refreshToken: string) {
        await dbRouter.query(`UPDATE users SET refresh = '${refreshToken}' WHERE login = '${userLogin}'`)
    }

    static async removeToken(refreshToken: string) {
        return await dbRouter.query(`UPDATE users SET refresh = NULL WHERE refresh = '${refreshToken}'`)
    }

    static async validateAccessToken(token: string){
        try {
            return jwt.verify(token, this.JWT_ACCESS_SECRET)
        }
        catch (e) {
            return null
        }
    }

    static async validateRefreshToken(token: string){
        try {
            return jwt.verify(token, this.JWT_REFRESH_SECRET)
        }
        catch (e) {
            return null
        }
    }

    static async findToken(refreshToken: string) {
        return await dbRouter.query(`SELECT refresh FROM users WHERE refresh = '${refreshToken}'`)
    }
}