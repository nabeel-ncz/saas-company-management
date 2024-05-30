export interface ISubscriber {
    userCreated(data: any): Promise<void>;
    userUpdated(data: any): Promise<void>;
    employeeCreated(data: any): Promise<void>;
    employeeUpdated(data: any): Promise<void>;
    employeeDeleted(data: any): Promise<void>;
    userEmailVerfication(data: any): Promise<void>;
    notifyEmployeeCreation(data: any): Promise<void>;
}