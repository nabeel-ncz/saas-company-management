
interface DeleteCompanyParams {
    id: number;
    isDeleted: boolean;
}
export interface IDeleteCompanyUseCase {
    execute(data: DeleteCompanyParams): Promise<void>;
}