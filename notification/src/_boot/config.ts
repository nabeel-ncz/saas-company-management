import { envString, envNumber } from "@/_boot/environment";

export const config = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 3002)
    },
    secrets: {
        access_token: envString('ACCESS_TOKEN_SECRET', 'testsecret'),
        refresh_token: envString('REFRESH_TOKEN_SECRET', 'testsecret')
    },
    sendgrid: {
        api_key: envString('SENDGRID_API_KEY', 'testkey'),
        email: envString('SENDGRID_FROM_MAIL', 'testmail')
    },
    kafka: {
        broker_urls: envString('KAFKA_BROKER_URLS', 'localhost:29092'),
        client_id: envString('KAFKA_CLIENT_ID', 'kafka-notification-client'),
        username: envString('KAFKA_USERNAME', ''),
        password: envString('KAFKA_PASSWORD', '')
    }
};