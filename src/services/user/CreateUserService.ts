import prismaClient from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute ({name, email, password}: UserRequest) {
        
        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        })

        return user;
    }
}

export { CreateUserService }