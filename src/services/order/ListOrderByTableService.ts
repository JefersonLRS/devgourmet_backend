import prismaClient from "../../prisma";

class ListOrderByTableService {
    async execute({ order_id }) {
        const orders = await prismaClient.item.findMany({
            where: {
                order_id
            },
            include: {
                product: {
                    select: {
                        name: true,
                        price: true,
                    }
                },
                order: {
                    select: {
                        table: true
                    }
                }
            }
        })

        return orders;
    }
}

export { ListOrderByTableService }