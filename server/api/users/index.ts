import type {IncomingMessage, ServerResponse} from "http";

export default fromNodeMiddleware(async (req: IncomingMessage, res: ServerResponse) => {
    // @ts-ignore
    const [rows, fields] = await req['db'].execute("SELECT * FROM users ORDER BY id DESC")

    return {
        status: res.statusCode,
        columns: fields.map((i: any) => i.name),
        entries: rows,
        message: res.statusMessage
    }
})