import { CompanyEntity } from "@/domain/entities";
interface UpdateCompanyParams {
    id: number;
    name: string;
    address: string;
    industry: string;
}
export interface IUpdateCompanyUseCase {
    execute(data: UpdateCompanyParams): Promise<CompanyEntity | Error>;
}