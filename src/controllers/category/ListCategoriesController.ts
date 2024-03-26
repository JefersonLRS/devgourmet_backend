import { Request, Response } from "express";

import { ListCategoriesService } from "../../services/category/ListCategoriesService";

class ListCategoriesController {
    async handle(req: Request, res: Response) {

        const categories = await new ListCategoriesService().execute();

        return res.json(categories);
    }
}

export { ListCategoriesController };