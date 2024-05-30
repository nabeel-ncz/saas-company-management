import { CompanyEntity } from "@/domain/entities";

interface CreateCompanyParams {
    ownerId: number;
    name: string;
    address: string;
    industry: string;
}
export interface ICreateCompanyUseCase {
    execute(data: CreateCompanyParams): Promise<CompanyEntity | Error>;
}