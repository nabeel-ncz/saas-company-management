import { envString, envNumber } from "@/_boot/environment";

export const config = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 3004)
    },
    postgres: {
        database: envString('DB_NAME', 'company_company'),
        host: envString('DB_HOST', 'localhost'),
        port: envNumber('DB_PORT', 5432),
        username: envString('DB_USERNAME', 'postgres'),
        password: envString('DB_PASSWORD', 'nabeelncz')
    },
    redis: {
        host: envString('REDIS_HOST', '127.0.0.1'),
        port: envNumber('REDIS_HOST', 6379),
        password: envString('REDIS_PASS', 'nabeelncz')
    },
    secrets: {
        access_token: envString('ACCESS_TOKEN_SECRET', 'testsecret'),
        refresh_token: envString('REFRESH_TOKEN_SECRET', 'testsecret'),
    },
    kafka: {
        broker_urls: envString('KAFKA_BROKER_URLS', 'localhost:29092'),
        client_id: envString('KAFKA_CLIENT_ID', 'kafka-company-client'),
        username: envString('KAFKA_USERNAME', ''),
        password: envString('KAFKA_PASSWORD', '')
    }
};