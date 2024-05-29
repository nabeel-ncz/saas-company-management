import { createUser } from "@/infrastructure/database/postgres/repositories";

enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

export default async function (data: Record<string, string | number>) {
    try {
        const { id, name, email } = data;
        let userRole = UserRole.OWNER;
        await createUser({
            id: id as number,
            name: name as string,
            email: email as string,
            role: userRole,
            designation: 'Company Owner'
        });
    } catch (error) {
        console.log(error);
    }
}