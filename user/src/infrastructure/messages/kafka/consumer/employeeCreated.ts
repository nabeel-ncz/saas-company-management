import { createUser } from "@/infrastructure/database/postgres/repositories";

export default async function ({
    id,
    name,
    email,
    role,
    designation,
    companyId
}) {
    try {
        await createUser({
            id,
            name,
            email,
            role,
            designation,
            companyId
        });
    } catch (error) {
        console.log(error);
    }
}