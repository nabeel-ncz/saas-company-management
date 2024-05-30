import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

export enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

export const createUser = async ({
    id,
    name,
    email,
    role,
    designation
}: { 
    id: number, 
    name: string, 
    email: string, 
    role: UserRole, 
    designation: string 
}) => {
    const user = new User();
    user.id = id;
    user.name = name;
    user.email = email;
    user.role = role;
    user.designation = designation
    const result = await userRepository.save(user);
    return result;
}