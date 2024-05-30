import { ISubscriber } from "@company-management/common";
import { userCreatedConsumer } from "./consumer";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
    }
}