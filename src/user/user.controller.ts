import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
} from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Res() res: Response;@Req() req: Request;
  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    try {
      return this.userService.save(user);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll(
    @Query("search") search: string,
    @Query("page") page: number,
    @Query("totalRow") totalRow: number
  ) {
    try {
      console.log(search, page, totalRow);
      return this.userService.findAll(search, page, totalRow);
    } catch (err) {
      console.log(err);
    }
  }

  @Get("restore/:id")
  restoreUser(@Param("id", ParseIntPipe) id: number): Promise<any> {
    try {
      return this.userService.restoreById(id);
    } catch (e) {
      console.log(e);
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
      return this.userService.update(id, user);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete("/focre/:id")
  deleteFocreUser(@Param("id", ParseIntPipe) id: number): Promise<any> {
    try {
      return this.userService.deleteFocreById(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete("/:id")
  deleteSoftUser(@Param("id", ParseIntPipe) id: number): Promise<any> {
    try {
      return this.userService.softDeleteOneById(id);
    } catch (e) {
      console.log(e);
    }
  }
}
