import Crypto from "crypto";

export default class SecurityService {
    static generatePasswordHash (pass: string) {
        const secretWord = 'ymarketHASHbvodfnvbmoi231234'
        return Crypto.createHmac('sha1', secretWord).update(pass).digest('hex')
    }

    static validatePassword(pass: string, hash: string) {
        return this.generatePasswordHash(pass) === hash
    }

    static isDataValid(data: string)
    {
        const re = /[^A-Z-a-z-0-9]/g;
        return (!re.test(data))
    }
}