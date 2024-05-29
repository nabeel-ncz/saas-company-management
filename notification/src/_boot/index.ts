import app from "@/presentation/app";
import { config } from "@/_boot/config";

export const main = async () => {
    try {
        app.listen(config.http.port, () => {
            console.log(`⚡Server is listening at ${config.http.port}`);
        })
    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
};