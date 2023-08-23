import express, { Express, Request, Response } from 'express';

const app: Express = express()
const port = 3003

app.get('/api', (req: Request, res: Response) => {
    res.send('BACKEND IS WORKING!')
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})