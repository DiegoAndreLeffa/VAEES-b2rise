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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (users) => users.purchaseOrder)
  @JoinColumn()
  user_id: Users;

  @Column({ type: "timestamp" })
  date: Date;
}
