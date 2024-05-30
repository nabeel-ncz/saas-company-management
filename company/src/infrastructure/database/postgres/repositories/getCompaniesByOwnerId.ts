import { AppDataSource } from "@/data-source"
import { Company } from "../schema"

export const getCompaniesByOwnerId = async (id: number) => {
    const company = AppDataSource.getRepository(Company);
    const res = await company.find({ where: {ownerId: id, isDeleted: false }  });
    return res;
}