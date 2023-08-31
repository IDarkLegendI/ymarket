import {dbRouter} from "../database/db";
import Crypto from "crypto";
import {UserDto} from "../dto/userdto";
import {TokenService} from "./tokenService";
import {ApiError} from "../exceptions/api-error";

export class UserService {
    private static generatePasswordHash (pass: string) {
        const secretWord = 'ymarketHASHbvodfnvbmoi231234'
        return Crypto.createHmac('sha1', secretWord).update(pass).digest('hex')
    }

    private static validatePassword(pass: string, hash: string) {
        return this.generatePasswordHash(pass) === hash
    }

    private static isDataValid(data: string)
    {
        const re = /[^A-Z-a-z-0-9]/g;
        return (!re.test(data))
    }

    static async registration(firstName: string, lastName: string, login: string, password: string) {
        let data = await dbRouter.query(`SELECT id FROM users WHERE login = '${login}'`)
        if (data[0]) throw ApiError.BadRequest('Такой аккаунт уже находится в базе данных')
        if (!this.isDataValid(login) || login.length > 16) throw ApiError.BadRequest('Некорректный логин')

        password = this.generatePasswordHash(password)

        data = await dbRouter.query(`INSERT INTO users (firstName, lastName, login, password) VALUES ('${firstName}', '${lastName}', '${login}', '${password}')`)
        if (data === null) throw ApiError.BadRequest('Ошибка внесения пользователя')
        const userDto = new UserDto(login)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.login, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    static async login(login: string, password: string) {
        let data = await dbRouter.query(`SELECT id FROM users WHERE login = '${login}'`)
        if (!data[0]) throw ApiError.BadRequest('Пользователя с таким логином не найдено')
        const passwordUser = await dbRouter.query(`SELECT password FROM users WHERE login = '${login}'`)
        if (!this.validatePassword(password, passwordUser[0].password)) throw ApiError.BadRequest('Пароль не верный')
        const userDto = new UserDto(login)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.login, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    static async logout(refreshToken: string) {
        return await TokenService.removeToken(refreshToken);
    }

    static async refresh(refreshToken: string) {
        if (!refreshToken) throw ApiError.UnauthorizedError()
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = TokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) throw ApiError.UnauthorizedError()

        const loginUser = await dbRouter.query(`SELECT login FROM users WHERE refresh = '${refreshToken}'`)

        const userDto = new UserDto(loginUser[0].login)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.login, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
}