import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import LibBooks from "./libBooks"

@Entity()
export default class LibPublishers {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  foundingDate: Date

  @Column()
  originCountry: String

  @OneToMany((type) => LibBooks, (book) => book.author)
  books: LibBooks[]
}