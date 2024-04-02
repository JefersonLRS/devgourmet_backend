import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const sendOrder = await new SendOrderService().execute({ order_id });
        return res.json(sendOrder);
    }
}

export { SendOrderController }