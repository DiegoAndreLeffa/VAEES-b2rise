import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Products, PurchaseOrder } from "..";

@Entity()
export class PurchaseOrderItem {
  @ManyToOne(() => Products)
  @JoinColumn({ name: "product_id" })
  product: Products;

  @ManyToOne(() => PurchaseOrder)
  @JoinColumn({ name: "purchase_order_id" })
  purchaseOrder: PurchaseOrder;

  @Column()
  quantity: number;

  @Column({ type: "decimal", precision: 15, scale: 2 })
  price: number;
}
