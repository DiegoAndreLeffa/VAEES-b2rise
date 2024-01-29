import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products, PurchaseOrder } from "..";

@Entity()
export class PurchaseOrderItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Products)
  @JoinColumn({ name: "product_id" })
  product: Products;

  @ManyToOne(() => PurchaseOrder)
  @JoinColumn({ name: "purchase_order_id" })
  purchaseOrder: PurchaseOrder;

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "decimal", precision: 15, scale: 2 })
  price: number;
}
