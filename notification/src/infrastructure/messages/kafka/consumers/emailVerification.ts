import { generateVerificationOTP } from "@/_lib/otp";
import { generateVerificationMail } from "@/_lib/sendGrid";

export default async function ({
    email
}) {

    console.log(`
    ===================================
    email-verification-message-consumed
    ===================================
    `);

    try {
        //generate random string
        const otp = generateVerificationOTP();
        //send mail using send-grid
        await generateVerificationMail({
            email: email,
            otp: otp
        });
        
    } catch (error: any) {
        console.log(error);
    }

}