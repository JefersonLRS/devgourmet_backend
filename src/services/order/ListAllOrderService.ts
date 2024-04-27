import prismaClient from "../../prisma";

class ListAllOrderService {
    async execute() {
        const orders = await prismaClient.order.findMany();
        return orders;
    }
}

export { ListAllOrderService }