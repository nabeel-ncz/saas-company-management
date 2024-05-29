import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    createUser: (data: Record<string, string>) => Promise<UserEntity | null | undefined>;
    findUserByEmail: (data: { email: string }) => Promise<UserEntity | null | undefined>;
}