import {
    AUTH_SERVICE_TOPIC,
    EMPLOYEE_CREATED_MESSAGE,
    NOTIFICATION_SERVICE_TOPIC,
    USER_SERVICE_TOPIC
} from "@company-management/common";
import { producer } from "..";
import { generateRandomPassword } from "@/_lib/utils";

export default async function (data) {
    try {
        await producer.connect();
        const randomPass = generateRandomPassword();
        await producer.sendBatch({
            topicMessages: [
                {
                    topic: USER_SERVICE_TOPIC,
                    messages: [{
                        key: EMPLOYEE_CREATED_MESSAGE,
                        value: JSON.stringify(data)
                    }]
                },
                {
                    topic: NOTIFICATION_SERVICE_TOPIC,
                    messages: [{
                        key: EMPLOYEE_CREATED_MESSAGE,
                        value: JSON.stringify(data)
                    }]
                },
                {
                    topic: AUTH_SERVICE_TOPIC,
                    messages: [{
                        key: EMPLOYEE_CREATED_MESSAGE,
                        value: JSON.stringify({
                            ...data,
                            password: randomPass
                        })
                    }]
                }
            ]
        });
        console.log(`
        ===========================================
        EMPLOYEE_CREATED_MESSAGE => [USER_SERVICE_TOPIC, AUTH_SERVICE_TOPIC, NOTIFICATION_SERVICE_TOPIC]
        ===========================================
        `)
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}