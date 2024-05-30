import { ISubscriber } from "@company-management/common";
import { employeeCreated, employeeUpdated, userCreatedConsumer } from "./consumer";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'employeeCreated' | 'employeeUpdated'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        employeeCreated: employeeCreated,
        employeeUpdated: employeeUpdated
    }
}