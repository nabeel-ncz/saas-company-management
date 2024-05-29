import { CompanyEntity } from "@/domain/entities";

export interface ICreateCompanyUseCase {
    execute(data: Record<string,string>): Promise<CompanyEntity | null | undefined>;
}