// @flow

export type StarCount = 1 | 2 | 3 | 4 | 5
export type Categories = 'sociology' | 'software' | 'econ' | 'history' | 'other'

export type BookForm = { title: string, stars: StarCount, category: Categories }
export type Book = Book & { id: number }
export type Category = { name: Categories, books: Array<Book> }

export type Year = { year: number, count: number }

// State

type Result = Array<number>

export type NormalizedBooks = {
  result: Result,
  books: { [string]: Book }
}

export type NormalizedYears = {
  result: Result,
  years: { [string]: Year }
}
