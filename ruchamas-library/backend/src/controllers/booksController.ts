import { Request, Response } from "express"
import {
  getAllBooks,
  findIfBookExists,
  addBookToDB,
  getBookCopiesByISBN,
} from "../services/booksService"

const requestAllBooks = async (req: Request, res: Response) => {
  try {
    res.send(await getAllBooks())
  } catch (error) {
    res.send(error)
  }
}

const requestFindIfBookExists = async (req: Request, res: Response) => {
  try {
    res.send(await findIfBookExists(req.params["isbn"]))
  } catch (error) {
    res.send(error)
  }
}

const sendAddBookToDB = async (req: Request, res: Response) => {
  try {
    res.send(await addBookToDB(req.body))
  } catch (error) {
    res.send(error)
  }
}

const requestBookCopiesByISBN = async (req: Request, res: Response) => {
  try {
    res.json(await getBookCopiesByISBN(req.params["isbn"]))
  } catch (error) {
    res.send(error)
  }
}

export {
  requestAllBooks,
  requestFindIfBookExists,
  sendAddBookToDB,
  requestBookCopiesByISBN,
}
