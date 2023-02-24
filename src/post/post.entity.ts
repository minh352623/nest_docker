import { BaseEntity } from "src/common/mysql/base.entity";
import { Entity, Column } from "typeorm";

@Entity({
  name: "post",
})
export class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: "int", width: 50 })
  accessModify: number;
}
