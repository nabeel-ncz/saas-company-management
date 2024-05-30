import { deleteUser } from "@/infrastructure/database/postgres/repositories";

export default async function({
    id
}) {
    try {
        await deleteUser({
            id: id as number
        });
    } catch (error) {
        console.log(error);
    }
}