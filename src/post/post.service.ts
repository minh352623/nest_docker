import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MysqlBaseService } from "src/common/mysql/base.service";
import { Repository } from "typeorm";
import { PostDto } from "./post.dto";
import { PostEntity } from "./post.entity";

@Injectable()
export class PostService extends MysqlBaseService<PostEntity, PostDto> {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {
    super(postRepository);
  }
}
