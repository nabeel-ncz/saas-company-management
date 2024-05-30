import { UserEntity } from "@/domain/entities";
import { producer } from "@/infrastructure/messages/kafka";
import { 
    COMPANY_SERVICE_TOPIC, 
    USER_CREATED_MESSAGE, 
    USER_SERVICE_TOPIC 
} from "@company-management/common";

export default async function (
    data: UserEntity
) {
    try {
        await producer.connect();
        
        const messages = [
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: COMPANY_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            }
        ]

        await producer.sendBatch({ topicMessages: messages });

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