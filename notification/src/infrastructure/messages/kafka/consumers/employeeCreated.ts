import { generateEmployeeNotifyEmail } from "@/_lib/sendGrid";

export default async function ({
    email,
    password
}) {

    console.log(`
    ===================================
    email-verification-message-consumed
    ===================================
    ${email}, ${password}
    `);

    try {
        //send mail using send-grid
        await generateEmployeeNotifyEmail({
            email: email,
            password: password
        });
    } catch (error: any) {
        console.log(error);
    }

}