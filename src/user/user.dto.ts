import { Expose, Transform } from "class-transformer";
import { BaseDto } from "src/common/base.dto";
import { UserRole } from "./user.entity";

export class UserDto extends BaseDto {
  @Expose()
  id: number;

  firstName: string;
  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + " " + obj.lastName)
  fullName: string;

  @Expose()
  avatar: string;

  @Expose()
  description: string;

  @Expose()
  role: UserRole;

  @Expose()
  age: number;
}
