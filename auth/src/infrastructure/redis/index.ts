import { config } from "@/_boot/config";
import { Redis } from "ioredis";

export const redisClient = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
    maxRetriesPerRequest: null
});