import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    createUser: (data: {
        id?: number
        name: string
        email: string
        password: string
        role: string
    }) => Promise<UserEntity | null | undefined>;
    findUserByEmail: (data: { email: string }) => Promise<UserEntity | null | undefined>;
}