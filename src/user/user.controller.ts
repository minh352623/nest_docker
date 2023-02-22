import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    try {
      return this.userService.save(user);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    try {
      return this.userService.findAll();
    } catch (err) {
      console.log(err);
    }
  }
  @Get("/:id")
  getOneUser(@Param("id", ParseIntPipe) id: number): Promise<any> {
    try {
      return this.userService.findOne(id);
    } catch (err) {
      console.log(err);
    }
  }

  @Patch("/:id")
  updateUSer(
    @Param("id", ParseIntPipe) id: number,
    @Body() user: UserDto
  ): Promise<UserDto> {
    try {
      return this.userService.updateUser(id, user);
    } catch (e) {
      console.log(e);
    }
  }
  @Delete("/:id")
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<any> {
    try {
      return this.userService.deleteUser(id);
    } catch (e) {
      console.log(e);
    }
  }
}
