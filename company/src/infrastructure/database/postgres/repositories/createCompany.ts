import { AppDataSource } from "@/data-source"
import { Company } from "../schema"

export const createCompany = async ({
    name,
    address,
    industry,
    ownerId
}: Record<string, string>) => {

    const companyRepo = AppDataSource.getRepository(Company);
    
    const company = new Company();
    company.ownerId = ownerId;
    company.name = name;
    company.address = address;
    company.industry = industry;

    const res  = await companyRepo.save(company);
    return res;
}