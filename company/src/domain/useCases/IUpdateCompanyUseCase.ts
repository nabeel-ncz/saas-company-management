import { CompanyEntity } from "@/domain/entities";

export interface IUpdateCompanyUseCase {
    execute(data: Record<string,string>): Promise<CompanyEntity | null | undefined>;
}