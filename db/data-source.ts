import { PostEntity } from "src/post/post.entity";
import { UserEntity } from "src/user/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: "172.24.176.1",
  port: 3307,
  username: "root",
  password: "root",
  database: "nest_crud",
  entities: [UserEntity, PostEntity],
  // entities: [UserEntity],
  //   autoLoadEntities: true,
  migrations: ["src/migration/*{.ts,.js}"],
  // cli: {
  //   migrationsDir: "src/migration",
  // },
  synchronize: true, //migration
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
