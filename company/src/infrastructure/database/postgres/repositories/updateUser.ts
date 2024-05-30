import { AppDataSource } from "@/data-source";
import { User } from "@/infrastructure/database/postgres/schema";

const userRepository = AppDataSource.getRepository(User);

enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

export const updateUser = async ({
    id,
    companyId,
    name,
    email,
    role,
    designation
}: {
    id: number,
    companyId?: number,
    name: string,
    email: string,
    role: UserRole,
    designation: string
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
    if(designation) {
        user.designation = designation;
    }
    if(companyId === null || companyId === undefined) {
        user.companyId = null;
    } else {
        user.companyId = companyId;
    }
    const result = await userRepository.save(user);

    return result;
}