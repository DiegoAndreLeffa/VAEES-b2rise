import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "..";

@Entity()
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @Column({ type: "datetime" })
  date: Date;
}
