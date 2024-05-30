import { CompanyEntity } from "@/domain/entities";

interface Params {
    ownerId: number;
}

export interface IGetCompaniesUseCase {
    execute(data: Params): Promise<CompanyEntity[] | Error>;
}