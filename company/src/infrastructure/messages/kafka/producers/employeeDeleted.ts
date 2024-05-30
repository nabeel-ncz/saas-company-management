import {
    AUTH_SERVICE_TOPIC,
    EMPLOYEE_DELETED_MESSAGE,
    USER_SERVICE_TOPIC
} from "@company-management/common";
import { producer } from "..";

export default async function (data) {
    try {
        await producer.connect();
        await producer.sendBatch({
            topicMessages: [
                {
                    topic: USER_SERVICE_TOPIC,
                    messages: [{
                        key: EMPLOYEE_DELETED_MESSAGE,
                        value: JSON.stringify(data)
                    }]
                },
                {
                    topic: AUTH_SERVICE_TOPIC,
                    messages: [{
                        key: EMPLOYEE_DELETED_MESSAGE,
                        value: JSON.stringify(data)
                    }]
                }
            ]
        });
        console.log(`
        ===========================================
        EMPLOYEE_DELETED_MESSAGE => [USER_SERVICE_TOPIC, AUTH_SERVICE_TOPIC]
        ===========================================
        `)
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}