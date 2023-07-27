import * as mysql from 'mysql2/promise'

const connectionMysql = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ymarket'
})

export default connectionMysql;