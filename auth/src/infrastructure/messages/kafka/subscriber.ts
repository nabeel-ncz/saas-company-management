import { ISubscriber } from "@company-management/common";
import { employeeCreated, employeeUpdated } from "./consumer";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'employeeCreated' | 'employeeUpdated'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        employeeCreated: employeeCreated,
        employeeUpdated: employeeUpdated
    }
}