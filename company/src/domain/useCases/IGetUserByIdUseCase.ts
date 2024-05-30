import { UserEntity } from "@/domain/entities";

export interface IGetUserByIdUseCase {
    execute(id: number): Promise<UserEntity | null>;
}