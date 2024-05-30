import { ISubscriber } from "@company-management/common";
import { employeeCreated, employeeDeleted, employeeUpdated } from "./consumer";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'employeeCreated' | 'employeeUpdated' | 'employeeDeleted'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        employeeCreated: employeeCreated,
        employeeUpdated: employeeUpdated,
        employeeDeleted: employeeDeleted
    }
}