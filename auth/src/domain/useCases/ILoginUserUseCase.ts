import { UserEntity } from "@/domain/entities";

export interface ILoginUserUseCase {
    execute(data: Record<string, string>): Promise<UserEntity | null>;
}