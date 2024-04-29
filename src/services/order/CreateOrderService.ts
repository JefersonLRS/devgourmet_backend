import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {

        const tableAlreadyExists = await prismaClient.order.findFirst({
            where: {
                table
            }
        })

        if (tableAlreadyExists) {
            throw new Error('Essa mesa já existe!');
        }

        const order = await prismaClient.order.create({
            data: {
                table,
                name
            },
            select: {
                id: true,
                table: true,
                name: true,
                status: true,
                created_at: true
            }
        })

        return order;
    }
}

export { CreateOrderService }