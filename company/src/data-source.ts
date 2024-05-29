import "reflect-metadata";
import { DataSource } from "typeorm";
import { Company } from "./infrastructure/database/postgres/schema";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "nabeelncz",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Company],
    migrations: [],
    subscribers: [],
})
