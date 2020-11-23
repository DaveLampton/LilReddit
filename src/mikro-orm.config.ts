import { Post } from "./entities/Post";
import { __DB_NAME__, __DB_PASS__, __DB_USER__, __PROD__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Post],
  type: "postgresql",
  dbName: __DB_NAME__,
  user: __DB_USER__,
  password: __DB_PASS__,
  debug: !__PROD__,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0];
