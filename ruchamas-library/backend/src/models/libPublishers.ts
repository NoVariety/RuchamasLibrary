import { Entity, Column, OneToMany, PrimaryColumn, JoinColumn } from "typeorm"
import LibBooks from "./libBooks"

@Entity()
export default class LibPublishers {
  @PrimaryColumn("varchar")
  name: string

  @Column("date")
  foundingDate: Date

  @Column("varchar")
  originCountry: String

  @OneToMany((type) => LibBooks, (book) => book.author)
  @JoinColumn()
  books: LibBooks[]
}
