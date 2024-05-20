import prismaClient from "../../prisma";

interface FinishOrderRequest {
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: FinishOrderRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: false
            }
        })
        const items = await prismaClient.item.deleteMany({
            where: {
                order_id
            }
        })
        return order && items;
    }
}

export { FinishOrderService };