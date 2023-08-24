import express, { Express, Request, Response } from 'express';
import {dbRouter} from "./database/db";

const app: Express = express()
const port = 3003

app.get('/api', (req: Request, res: Response) => {
    res.send('BACKEND IS WORKING!')
});

app.listen(port, () => {
    console.log(`⚡️[SERVER] -> Server is running at http://localhost:${port}`)
})

dbRouter.checkConnection()