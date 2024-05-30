import { AppDataSource } from "@/data-source"
import { Company } from "../schema";

interface UpdateCompanyParams {
    id: number;
    name: string;
    address: string;
    industry: string;
}
export const updateCompany = async ({
    id,
    name,
    address,
    industry
}: UpdateCompanyParams) => {
    const companyRepo = AppDataSource.getRepository(Company);
    const company = await companyRepo.findOneBy({ id });
    if (!company) {
        throw new Error("Company doesn't exist");
    }
    company.name = name;
    company.address = address;
    company.industry = industry;

    const res = await companyRepo.save(company);
    return res;
}