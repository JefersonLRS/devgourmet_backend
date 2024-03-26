import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name.toLocaleLowerCase()
            }
        });

        if (categoryAlreadyExists) {
            return { error: "Category already exists" }
        }

        const category = await prismaClient.category.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category;
    }
}

export { CreateCategoryService }