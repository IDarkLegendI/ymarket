import express, { Express, Request, Response } from 'express';
import {dbRouter} from "./database/db";
import {Logger} from "./modules/logger";
import {router} from './routes/authRouter'

const app: Express = express()
const port = 3003

app.use('/auth', router)
app.get('/api', (req: Request, res: Response) => {
    res.send('BACKEND IS WORKING!')
});

app.listen(port, () => {
    Logger.log(`success`,`Server is running at http://localhost:${port}`)
})

dbRouter.checkConnection()