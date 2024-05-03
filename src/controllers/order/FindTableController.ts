import { Request, Response } from "express";
import { FindTableService } from "../../services/order/FindTableService";

class FindTableController {
    async handle(req: Request, res: Response) {
        const { table } = req.body;

        const FindTable = await new FindTableService().execute({
            table
        })

        return res.json(FindTable);
    }
}

export { FindTableController }