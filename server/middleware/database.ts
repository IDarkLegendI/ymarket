import type {IncomingMessage, ServerResponse} from "http";
import * as mysql from 'mysql2/promise'

export default fromNodeMiddleware(async (req: IncomingMessage, res: ServerResponse) => {
    // @ts-ignore
    req['db'] = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ymarket'
    })
})