import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

export const createUser = async ({
    name,
    email,
    password,
    role
}: Record<string, string>) => {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;
    const result = await userRepository.save(user);
    return result;
}
