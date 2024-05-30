import { hashPassword } from "@/_lib";
import { createUser } from "@/infrastructure/database/postgres/repositories";

export default async function({
    id,
    name,
    email,
    password, 
    role
}) {
    try {
        const hash = await hashPassword(password);
        await createUser({
            id: id as number,
            name: name as string,
            email: email as string,
            password: hash,
            role: role as string
        });
    } catch (error) {
        console.log(error);
    }
}