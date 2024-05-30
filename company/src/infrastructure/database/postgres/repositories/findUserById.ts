import { AppDataSource } from "@/data-source"
import { User } from "../schema"

export const findUserById = async (id: number) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: id });
    return user;    
}