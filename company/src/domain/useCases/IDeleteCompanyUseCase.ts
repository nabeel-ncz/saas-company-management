export interface IDeleteCompanyUseCase {
    execute(data: Record<string,string>): Promise<void>;
}