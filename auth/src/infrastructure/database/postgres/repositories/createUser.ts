import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

export const createUser = async ({
    id,
    name,
    email,
    password,
    role
}: {
    id?: number
    name: string
    email: string
    password: string
    role: string
}) => {
    const user = new User();
    if(id) {
        user.id = id;
    }
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;
    const result = await userRepository.save(user);
    return result;
}
