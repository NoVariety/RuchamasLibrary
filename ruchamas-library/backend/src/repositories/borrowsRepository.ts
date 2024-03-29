import { IsNull, LessThan, Not } from "typeorm"
import { AppDataSource } from "../dataSource"
import LibBorrows from "../models/libBorrows"

import { borrowBookByISBN, returnBookByISBN } from "./booksRepository"

const borrowsRepository = AppDataSource.getRepository(LibBorrows)

const fetchAllBorrows = async () =>
  await borrowsRepository.find({ relations: { book: true, reader: true } })

const fetchUnreturnedBorrowsBeforeDate = async (date: Date) =>
  await borrowsRepository.find({
    where: { borrowDate: LessThan(date), returnDate: IsNull() },
    relations: { book: true, reader: true },
  })

const fetchUnreturnedBorrowsByBookID = async (bookID: number) =>
  await borrowsRepository.find({
    where: { book: { id: bookID }, returnDate: IsNull() },
    relations: { book: true, reader: true },
  })

const countUnreturnedBorrowByBookID = async (bookID: number) =>
  await borrowsRepository.count({
    where: { book: { id: bookID }, returnDate: IsNull() },
  })

const fetchBorrowsByID = async (id: number) =>
  await borrowsRepository.find({
    where: { id: id },
    relations: { book: true, reader: true },
  })

const addBorrowToDB = async (borrow: LibBorrows) => {
  await borrowsRepository.save(borrow)
  await borrowBookByISBN(borrow.book.id)
}

const returnBookByID = async (id: number) => {
  const borrowToReturn: LibBorrows = await borrowsRepository.findOne({
    where: { id: id },
    relations: { book: true, reader: true },
  })
  await returnBookByISBN(borrowToReturn.book.id)
  await borrowsRepository.save({
    ...borrowToReturn,
    returnDate: new Date(),
  })
}

export {
  fetchAllBorrows,
  fetchUnreturnedBorrowsBeforeDate,
  fetchUnreturnedBorrowsByBookID,
  countUnreturnedBorrowByBookID,
  fetchBorrowsByID,
  addBorrowToDB,
  returnBookByID,
}
