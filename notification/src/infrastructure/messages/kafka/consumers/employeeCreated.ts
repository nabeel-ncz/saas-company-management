import { generateEmployeeNotifyEmail } from "@/_lib/sendGrid";

export default async function ({
    email,
    passsword
}) {

    console.log(`
    ===================================
    email-verification-message-consumed
    ===================================
    ${email}, ${passsword}
    `);

    try {
        //send mail using send-grid
        await generateEmployeeNotifyEmail({
            email: email,
            password: passsword
        });
    } catch (error: any) {
        console.log(error);
    }

}