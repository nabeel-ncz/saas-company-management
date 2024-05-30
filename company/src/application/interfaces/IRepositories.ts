import { CompanyEntity } from "@/domain/entities";

interface CreateCompanyParams {
    ownerId: number;
    name: string;
    address: string;
    industry: string;
}

interface UpdateCompanyParams {
    id: number;
    name: string;
    address: string;
    industry: string;
}

interface DeleteCompanyParams {
    id: number;
    isDeleted: boolean;
}

export interface IRepositories {
    createCompany: (data: CreateCompanyParams) => Promise<CompanyEntity | Error | null>;
    updateCompany: (data: UpdateCompanyParams) => Promise<CompanyEntity | Error | null>;
    deleteCompany: (data: DeleteCompanyParams) => Promise<void>;
};