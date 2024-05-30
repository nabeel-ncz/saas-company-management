import { UserEntity } from "@/domain/entities";

export interface ICreateUserUseCase {
    execute(data: {
        id?: number
        name: string
        email: string
        password: string
        role: string
    }): Promise<UserEntity | null | undefined>;
}