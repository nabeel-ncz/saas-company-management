import { ISubscriber } from "@company-management/common";
import { emailVerification, employeeCreated } from "./consumers";

export interface INotificationSubscriber extends Pick<
    ISubscriber, 'userEmailVerfication' | 'employeeCreated'
> { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userEmailVerfication: emailVerification,
        employeeCreated: employeeCreated
    }
}