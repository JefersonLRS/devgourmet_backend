import prismaClient from "../../prisma";

class FindProductService {
    async execute({ product_id }) {
        const product = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        })

        return product;
    }
}

export { FindProductService }