import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;
        const finishOrder = await new FinishOrderService().execute({ order_id });
        res.json(finishOrder);
    }
}

export { FinishOrderController };