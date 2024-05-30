import { CompanyEntity, UserEntity } from "@/domain/entities";

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
enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

interface CreateUserParams { 
    id?: number, 
    companyId?: number;
    name: string, 
    email: string, 
    role: UserRole, 
    designation: string 
}

interface UpdateUserParams { 
    id: number, 
    companyId?:number,
    name: string, 
    email: string, 
    role: UserRole, 
    designation: string 
}

export interface IRepositories {
    createCompany: (data: CreateCompanyParams) => Promise<CompanyEntity | Error | null>;
    updateCompany: (data: UpdateCompanyParams) => Promise<CompanyEntity | Error | null>;
    deleteCompany: (data: DeleteCompanyParams) => Promise<void>;
    getCompaniesByOwnerId: (id: number) => Promise<CompanyEntity[] | Error>;
    getCompanyById: (id: number) => Promise<CompanyEntity | Error | null>;
    createUser: (data: CreateUserParams) => Promise<UserEntity | Error | null>;
    updateUser: (data: UpdateUserParams) => Promise<UserEntity | Error | null>;
    deleteUser: (id: number) => Promise<void>;
    findUserById: (id: number) => Promise<UserEntity | null>
};