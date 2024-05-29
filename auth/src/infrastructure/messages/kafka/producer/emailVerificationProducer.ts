import { producer } from "@/infrastructure/messages/kafka";

export default async function (
    data: { email: string, otp: string }
){

    try {
        await producer.connect();
        await producer.send({
            topic: `NOTIFICATION_SERVICE_TOPIC`,
            messages: [{
                key: `emailVerificationRequested`,
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