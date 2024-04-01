import {Request, Response} from 'express';
import { ListCategoryService } from '../../services/product/ListCategoryService';

class ListCategoryController {
    async handle(req: Request, res: Response) {

        const category_id = req.query.category_id as string;

        const categories = await new ListCategoryService().execute({
            category_id
        });
        return res.json(categories);
    }
}

export { ListCategoryController }