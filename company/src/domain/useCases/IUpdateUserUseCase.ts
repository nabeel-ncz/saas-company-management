import { UserEntity } from "@/domain/entities";

enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

interface UpdateUserParams { 
    id: number, 
    companyId?:number,
    name: string, 
    email: string, 
    role: UserRole, 
    designation: string 
}

export interface IUpdateUserUseCase {
    execute(data: UpdateUserParams): Promise<UserEntity | Error>;
}