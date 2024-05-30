import { producer } from "@/infrastructure/messages/kafka";
import { NOTIFICATION_SERVICE_TOPIC, USER_EMAIL_VERFICATION } from "@company-management/common"

export default async function (
    data: { email: string, otp: string }
) {

    try {
        await producer.connect();
        await producer.send({
            topic: NOTIFICATION_SERVICE_TOPIC,
            messages: [{
                key: USER_EMAIL_VERFICATION,
                value: JSON.stringify(data)
            }]
        });
        console.log(`
        ===========================================
        emailVerificationRequested => [NOTIFICATION_SERVICE_TOPIC]
        ===========================================
        `)
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}