import { consumer } from "@/infrastructure/messages/kafka";
import { createSubscriber } from "@/infrastructure/messages/kafka/subscriber";
import { COMPANY_SERVICE_TOPIC } from "@company-management/common";

export const startConsumer = async () => {
    try {

        await consumer.connect();

        await consumer.subscribe({
            topic: COMPANY_SERVICE_TOPIC,
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage: async ({ message }) => {
                
                const { key, value } = message;
                const subscriberMethod = String(key);
                const subscriberData = JSON.parse(String(value));
                
                console.log(`
                ======================================================
                method - ${subscriberMethod} : data - ${JSON.stringify(subscriberData)}
                ======================================================
                `);
                
                try {
                    if(subscriber[subscriberMethod]) {
                        await subscriber[subscriberMethod](subscriberData);
                    } else {
                        throw new Error(`[${subscriberMethod}] : Subscriber not defined`)
                    }
                } catch (error: any) {
                    console.log(error);
                    let message = error?.message || "something wrong with kafka consumer";
                    throw new Error(message);
                }
            }
        });
    } catch (error: any) {
        throw new Error("Kafka Consume Error -> Company : " + error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}