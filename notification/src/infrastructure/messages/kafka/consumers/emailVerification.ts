import { generateVerificationMail } from "@/_lib/sendGrid";

export default async function ({
    email,
    otp
}) {

    console.log(`
    ===================================
    email-verification-message-consumed
    ===================================
    ${email}, ${otp}
    `);

    try {
        //send mail using send-grid
        await generateVerificationMail({
            email: email,
            otp: otp
        });
    } catch (error: any) {
        console.log(error);
    }

}