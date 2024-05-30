import { ISubscriber } from "@company-management/common";
import { emailVerification } from "./consumers";

export interface INotificationSubscriber extends Pick<
    ISubscriber, 'userEmailVerfication'
> { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userEmailVerfication: emailVerification
    }
}