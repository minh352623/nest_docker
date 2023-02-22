import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";
//không docker-compose up -d se khong connect database dc

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "root",
      database: "nest_crud",
      // entities: [join(__dirname, "/../**/**.entity{.ts,.js}")],
      // entities: [UserEntity],
      autoLoadEntities: true,
      synchronize: true, //migration
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
