import { updateUser } from "@/infrastructure/database/postgres/repositories";

export default async function (data) {
    try {
        await updateUser(data);
    } catch (error) {
        console.log(error);
    }
}