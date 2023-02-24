import { BaseEntity } from "src/common/mysql/base.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
export enum UserRole {
  ADMIN = "admin",
  EDITOR = "client",
  GHOST = "ghost",
}

@Entity({
  name: "user",
})
export class UserEntity extends BaseEntity {
  @Column({
    length: 50,
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column({
    nullable: true,
  })
  age: number;

  @Column()
  description: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role: UserRole;
}
