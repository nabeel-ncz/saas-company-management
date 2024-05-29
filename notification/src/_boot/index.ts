import app from "@/presentation/app";
import { config } from "@/_boot/config";
import { startConsumer, stopConsumer } from "@/_boot/consumer";

export const main = async () => {
    try {
        app.listen(config.http.port, () => {
            console.log(`⚡ Server is listening at ${config.http.port}`);
        })
        startConsumer()
            .catch((error: any) => {
                console.info(error);
            });

        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
            stopConsumer();
        });
    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
};