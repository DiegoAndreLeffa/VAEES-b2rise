import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PurchaseOrder } from "..";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 50 })
  password: string;

  @Column({ type: "varchar", length: 50 })
  first_name: string;

  @Column({ type: "varchar", length: 50 })
  last_name: string;

  @OneToMany(() => PurchaseOrder, (purchaseOrder) => purchaseOrder.user_id)
  purchaseOrder: PurchaseOrder[];
}
