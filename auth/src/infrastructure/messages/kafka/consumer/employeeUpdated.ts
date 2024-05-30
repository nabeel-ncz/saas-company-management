import { updateUser } from "@/infrastructure/database/postgres/repositories";

export default async function({
    id,
    name,
    email,
    role
}) {
    try {
        await updateUser({
            id: id as number,
            name: name as string,
            email: email as string,
            role: role as string
        });
    } catch (error) {
        console.log(error);
    }
}