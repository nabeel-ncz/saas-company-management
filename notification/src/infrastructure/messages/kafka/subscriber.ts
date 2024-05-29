import { emailVerification } from "./consumers";

export const createSubscriber = () => {
    return {
        emailVerificationRequested: emailVerification
    }
}