import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import { PurchaseOrder } from "..";
import { hashSync } from "bcryptjs";

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

  @BeforeInsert()
  hashPass() {
    this.password = hashSync(this.password, 9);
  }
}
