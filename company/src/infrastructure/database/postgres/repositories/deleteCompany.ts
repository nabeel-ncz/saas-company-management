import { AppDataSource } from "@/data-source"
import { Company } from "../schema";

interface DeleteCompanyParams {
    id: number;
    isDeleted: boolean;
}
export const deleteCompany = async ({
    id,
    isDeleted
}: DeleteCompanyParams) => {
    const companyRepo = AppDataSource.getRepository(Company);
    const company = await companyRepo.findOneBy({ id });
    if (!company) {
        throw new Error("Company doesn't exist");
    }
    company.isDeleted = isDeleted;
    const res = await companyRepo.save(company);
    return res;
}