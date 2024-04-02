import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response) {
        const ListOrders = await new ListOrderService().execute();

        return res.json(ListOrders);
    }
}

export { ListOrderController }