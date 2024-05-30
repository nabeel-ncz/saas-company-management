import { AppDataSource } from "@/data-source"
import { Company } from "../schema"

export const getCompanyById = async (id: number) => {
    const companyRepo = AppDataSource.getRepository(Company);
    const res = await companyRepo.findOneBy({ id });
    return res;
}