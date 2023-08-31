import {Request, Response} from "express";

export class RouterController {
	async product(req: Request, res: Response)
	{
		res.send(req.params);
	}

	async business(req: Request, res: Response)
	{
		res.send(req.params);
	}
}