import prismaClient from "../../prisma";

class FindTableService {
    async execute({ table }) {
        const orderId = await prismaClient.order.findFirst({
            where: {
                table
            },
            select: {
                id: true
            }
        })

        return orderId;
    }
}

export { FindTableService }