import { AppDataSource } from "@/data-source"
import { startConsumer, stopConsumer } from "@/_boot/consumer";
import { config } from "@/_boot/config";
import app from "@/presentation/app";

export const main = async () => {
    try {
        await AppDataSource.initialize();
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
    } catch (error) {
        console.log(error);
    }
}