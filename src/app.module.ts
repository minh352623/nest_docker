import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import dataSource, { dataSourceOptions } from "db/data-source";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostModule } from "./post/post.module";
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";
//không docker-compose up -d se khong connect database dc

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
