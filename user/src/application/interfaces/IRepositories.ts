import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    findUserById: (id: number) => Promise<UserEntity | Error | null>;
};
