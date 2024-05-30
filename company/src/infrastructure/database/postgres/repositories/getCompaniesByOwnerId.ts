import { AppDataSource } from "@/data-source"
import { Company } from "../schema"

export const getCompaniesByOwnerId = async (id: number) => {
    const company = AppDataSource.getRepository(Company);
    const res = await company.findBy({ ownerId: id });
    return res;
}