import { Request, Response } from "express";
import { ListAllOrderService } from "../../services/order/ListAllOrderService";

class ListAllOrderController {
    async handle(req: Request, res: Response) {
        const ListAllOrders = await new ListAllOrderService().execute();

        return res.json(ListAllOrders);
    }
}

export { ListAllOrderController }