import { AppDataSource } from "@/data-source"
import { Company } from "../schema"

interface CreateCompanyParams {
    ownerId: number;
    name: string;
    address: string;
    industry: string;
}

export const createCompany = async ({
    name,
    address,
    industry,
    ownerId
}: CreateCompanyParams) => {

    const companyRepo = AppDataSource.getRepository(Company);
    
    const company = new Company();
    company.ownerId = ownerId;
    company.name = name;
    company.address = address;
    company.industry = industry;

    const res  = await companyRepo.save(company);
    return res;
}