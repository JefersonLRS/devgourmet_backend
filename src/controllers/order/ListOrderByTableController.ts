import { Request, Response } from "express";

import { ListOrderByTableService } from "../../services/order/ListOrderByTableService";

class ListOrderByTableController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const listOrderByTable = await new ListOrderByTableService().execute({
            order_id
        })

        return res.json(listOrderByTable);
    }
}

export { ListOrderByTableController }