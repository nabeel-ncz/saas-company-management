import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

export const updateUser = async ({
    id,
    name,
    email,
    role
}: {
    id: number,
    name?: string,
    email?: string,
    role?: string
}) => {
    const user = await userRepository.findOneBy({ id });
    if(name) {
        user.name = name;
    }
    if(email) {
        user.email = email;
    }
    if(role) {
        user.role = role;
    }
    const result = await userRepository.save(user);
    return result;
}