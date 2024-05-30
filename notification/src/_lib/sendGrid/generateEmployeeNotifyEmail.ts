import sendGridMail from "@sendgrid/mail";
import { config } from "@/_boot/config";

sendGridMail.setApiKey(config.sendgrid.api_key);
export const generateEmployeeNotifyEmail = async (
    data: {
        email: string,
        password: string
    }
) => {
    const message = {
        to: data.email,
        from: {
            name: "Nabeel Saas Company Management",
            email: `${config.sendgrid.email}`
        },
        subject: "Employee Verification",
        text: "Please login to your account using this password",
        html: `
        <h6> This is your company account password</h6>
        <h2>Use this to logi : ${data.password}</h2>
        `
    };
    try {
        await sendGridMail.send(message);
    } catch (error: any) {
        throw new Error(error.message || "send grid mail issue!");
    }
}