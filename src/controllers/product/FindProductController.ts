import { Response, Request } from "express";
import { FindProductService } from "../../services/product/FindProductService";

class FindProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string

        const product = await new FindProductService().execute({
            product_id
        })

        return res.json(product);
    }
}

export { FindProductController }