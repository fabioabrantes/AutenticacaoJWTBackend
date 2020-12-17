import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";


@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

}