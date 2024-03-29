enum viewTypes {
  NONE,
  BOOKS,
  READERS,
}

enum borrowViewTypes {
  BORROW,
  RETURN,
}

enum readerViewTypes {
  ALL,
  UNRETURNED,
}

enum coverTypes {
  HARDCOVER = "Hardcover",
  PAPERBACK = "Paperback",
}

type DropdownOptionsType = Array<{
  key: any
  value: any
  label: string
}>

interface BookInformation {
  id: number
  title: string
  coverImage: string
  author: string
  summary: string
  publisher: LibPublishers | null
  publishDate: string
  language: string
  category: string
  coverType: coverTypes
  pageCount: number
}

interface LibPublishers {
  name: string
  foundingDate: Date
  originCountry: string
}

interface LibBooks extends BookInformation {
  price: number
  copies: number
}

interface LibReaders {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  joinDate: Date | null
}

interface LibReadersTitles {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  joinDate: string
}

interface LibBorrows {
  id?: number
  book: LibBooks
  reader: LibReaders | null | undefined
  borrowDate: Date
  returnDate: Date | null
}

interface FormInputProps {
  name: string
  control: any
  label: string
  setValue?: any
  errorMessage?: string
  dropdownOptions?: DropdownOptionsType
}

interface AddBookFormInput {
  ISBN: number
  publisherName: string
  pageCount: number
  printFormat: coverTypes
  copies: number
}

interface AddReaderFormInput {
  ID: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

interface ChooseReaderFormInput {
  readerID: number | string
}

interface ChooseBorrowFormInput {
  borrowID: number | string
}

const defaultBookInfo: BookInformation = {
  summary: "no summary available",
  title: "?",
  coverImage:
    "https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png",
  author: "?",
  language: "?",
  publisher: null,
  publishDate: "?",
  category: "?",
  coverType: coverTypes.HARDCOVER,
  pageCount: 0,
  id: 0,
}

const ISBN_LENGTH: number = 13
const MIN_BOOK_COPIES: number = 1
const ID_LENGTH: number = 9
const PHONE_NUMBER_LENGTH: number = 10
const TWO_WEEKS_IN_MILLIS: number = 12096e5

export {
  viewTypes,
  borrowViewTypes,
  readerViewTypes,
  coverTypes,
  type DropdownOptionsType,
  type BookInformation,
  type LibPublishers,
  type LibBooks,
  type LibReaders,
  type LibReadersTitles,
  type LibBorrows,
  type FormInputProps,
  type AddBookFormInput,
  type AddReaderFormInput,
  type ChooseReaderFormInput,
  type ChooseBorrowFormInput,
  defaultBookInfo,
  ISBN_LENGTH,
  MIN_BOOK_COPIES,
  ID_LENGTH,
  PHONE_NUMBER_LENGTH,
  TWO_WEEKS_IN_MILLIS,
}
