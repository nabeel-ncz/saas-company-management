import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company, User } from "@/infrastructure/database/postgres/schema";
import { config } from "@/_boot/config";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: `${config.postgres.host}`,
    port: config.postgres.port,
    username: `${config.postgres.username}`,
    password: `${config.postgres.password}`,
    database: `${config.postgres.database}`,
    synchronize: true,
    logging: true,
    entities: [Company, User],
    migrations: [],
    subscribers: [],
})
