import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { UserEntity } from "./user.entity";
import { plainToInstance } from "class-transformer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  async save(userDto: UserDto): Promise<UserDto> {
    const saveUser = await this.usersRepository.save(userDto);
    return plainToInstance(UserDto, saveUser, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<UserDto[]> {
    try {
      const users = await this.usersRepository.find();
      return plainToInstance(UserDto, users, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findOne(id: number): Promise<UserDto> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
          id: id,
        },
      });
      return plainToInstance(UserDto, user, { excludeExtraneousValues: true });
    } catch (err) {
      console.log(err);
    }
  }

  async updateUser(id: number, user: UserDto): Promise<any> {
    try {
      const userold = await this.findOne(id);
      if (!userold) return "user not found";
      //   return plainToInstance(UserDto, user, { excludeExtraneousValues: true });
      //   user.firstName && (userold.firstName = user.firstName);
      //   user.lastName && (userold.lastName = user.lastName);
      //   user.avatar && (userold.avatar = user.avatar);
      //   user.description && (userold.description = user.description);
      //   user.role && (userold.role = user.role);
      //   user.age && (userold.age = user.age);
      //   const userNew = await this.usersRepository.save(userold);

      const updateStatus = await this.usersRepository.update(id, user);
      return "success";
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(id: number): Promise<any> {
    try {
      const userold = await this.usersRepository.findOne({
        where: {
          id: id,
        },
      });
      console.log(userold);
      if (!userold) return "Delete user successfully";
      const status = await this.usersRepository.remove(userold);
      return status;
    } catch (err) {
      console.log(err);
    }
  }
}
