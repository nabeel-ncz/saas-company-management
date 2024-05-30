import { CompanyEntity } from "@/domain/entities";

export interface IGetCompanyByIdUseCase {
    execute(id: number): Promise<CompanyEntity | Error>;
}