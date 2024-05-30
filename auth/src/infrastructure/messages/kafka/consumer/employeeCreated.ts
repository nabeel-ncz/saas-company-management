import { createUser } from "@/infrastructure/database/postgres/repositories";

export default async function({
    id,
    name,
    email,
    password, 
    role
}) {
    try {
        await createUser({
            id: id as number,
            name: name as string,
            email: email as string,
            password: password as string,
            role: role as string
        });
    } catch (error) {
        console.log(error);
    }
}