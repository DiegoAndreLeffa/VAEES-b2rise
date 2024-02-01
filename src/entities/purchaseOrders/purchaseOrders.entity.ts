import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { PurchaseOrderItem, Users } from "..";

@Entity()
export class PurchaseOrder {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (users) => users.purchaseOrder)
  @JoinColumn()
  user_id: Users;

  @Column({ type: "timestamp" })
  date: Date;

  @OneToMany(
    () => PurchaseOrderItem,
    (purchaseOrderItem) => purchaseOrderItem.purchaseOrder
  )
  purchaseOrderItem: PurchaseOrderItem;
}
