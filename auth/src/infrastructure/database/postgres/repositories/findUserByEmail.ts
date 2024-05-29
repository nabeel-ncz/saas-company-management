import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

export const findUserByEmail = async ({
    email
}: Record<string, string>) => {
    const user = await userRepository.findOne({
        where: { email: email }
    });
    return user;
}