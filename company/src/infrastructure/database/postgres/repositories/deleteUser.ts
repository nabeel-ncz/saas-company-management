import { AppDataSource } from "@/data-source"
import { User } from "../schema"

export const deleteUser = async (id: number) => {
    await AppDataSource
        .getRepository(User)
        .createQueryBuilder()
        .softDelete()
        .where("id = :id", { id })
        .execute();
}