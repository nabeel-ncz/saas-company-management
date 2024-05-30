import { ISubscriber } from "@company-management/common";
import { 
    employeeCreated, 
    employeeUpdated, 
    employeeDeleted, 
    userCreatedConsumer 
} from "./consumer";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'employeeCreated' | 'employeeUpdated' | 'employeeDeleted'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        employeeCreated: employeeCreated,
        employeeUpdated: employeeUpdated,
        employeeDeleted: employeeDeleted
    }
}