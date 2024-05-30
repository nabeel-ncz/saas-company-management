import { UserEntity } from "@/domain/entities";

enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

interface CreateUserParams { 
    id?: number, 
    name: string, 
    email: string, 
    role: UserRole, 
    designation: string 
}

export interface ICreateUserUseCase {
    execute(data: CreateUserParams): Promise<UserEntity | Error>;
}