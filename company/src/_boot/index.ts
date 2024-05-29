import { AppDataSource } from "@/data-source"
import { config } from "@/_boot/config";
import app from "@/presentation/app";

export const main = async () => {
    try {
        await AppDataSource.initialize();
        app.listen(config.http.port, () => {
            console.log(`⚡ Server is listening at ${config.http.port}`);
        })
    } catch (error) {
        console.log(error);
    }
}