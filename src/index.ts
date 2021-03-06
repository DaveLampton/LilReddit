import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const post = orm.em.create(Post, { title: "My first post." });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
