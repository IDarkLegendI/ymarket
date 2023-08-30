import jwt from 'jsonwebtoken'
import {dbRouter} from "../database/db";
import {Logger} from "../modules/logger";

export class TokenService {
    private static JWT_ACCESS_SECRET: string = 'ymarket-accSDF1ess-se3cret-keySDFF3SDF'
    private static JWT_REFRESH_SECRET: string = 'ymarket-refrSD324Fesh-seSDFcr2t-keySD1FF'
    static generateTokens (payload: {id: number ,login: string, firstName: string}) {
        const accessToken = jwt.sign(payload, this.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, this.JWT_REFRESH_SECRET, {expiresIn: '30d'})
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