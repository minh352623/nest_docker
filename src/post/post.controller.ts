import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Query } from "@nestjs/common/decorators";
import { PostDto } from "./post.dto";
import { PostService } from "./post.service";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() post: PostDto): Promise<PostDto> {
    try {
      return this.postService.save(post);
    } catch (err) {
      console.log(err);
    }
  }
  @Get()
  getAllPost(
    @Query("search") search: string,
    @Query("page") page: number,
    @Query("totalRow") totalRow: number
  ): Promise<PostDto[]> {
    try {
      return this.postService.findAll(search, page, totalRow);
    } catch (err) {
      console.log(err);
    }
  }
  @Get(":id")
  getOnePostById(@Param("id") id: number): Promise<PostDto> {
    try {
      return this.postService.findOne(id);
    } catch (err) {
      console.log(err);
    }
  }
}
