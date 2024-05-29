import { UserEntity } from "@/domain/entities";
import { producer } from "@/infrastructure/messages/kafka";

export default async function (
    data: UserEntity
) {
    try {
        await producer.connect();
        await producer.send({
            topic: `USER_SERVICE_TOPIC`,
            messages: [{
                key: `userCreated`,
                value: JSON.stringify(data)
            }]
        });
        console.log(`
        ===========================================
        userCreated => [USER_SERVICE_TOPIC]
        ===========================================
        `)
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}