import { UserEntity } from "@/domain/entities";

export interface ICreateUserUseCase {
    execute(data: Record<string,string>): Promise<UserEntity | null | undefined>;
}