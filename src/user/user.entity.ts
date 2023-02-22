import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "client",
  GHOST = "ghost",
}

@Entity({
  name: "user",
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
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
