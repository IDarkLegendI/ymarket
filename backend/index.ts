import express, { Express, Request, Response } from 'express';
import {dbRouter} from "./database/db";
import {Logger} from "./modules/logger";
import {authRouter} from './routers/authRouter'
import bodyParser from "body-parser"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {router} from "./routers/router";
import {errorMiddleware} from "./middlewares/errorMiddleware";

const app: Express = express()
const port = 3003

app.use(bodyParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('', router)
app.use(errorMiddleware)


app.get('/api', (req: Request, res: Response) => {
    res.send('BACKEND IS WORKING!')
});

app.listen(port, () => {
    Logger.log(`success`,`Server is running at http://localhost:${port}`)
})

dbRouter.checkConnection()