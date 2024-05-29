import { UserEntity } from "@/domain/entities";

export interface ILoginUseCase {
    execute(data: Record<string, string>): Promise<UserEntity | null>;
}