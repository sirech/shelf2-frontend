// @flow

export type StarCount = 1 | 2 | 3 | 4 | 5
export type Book = { id: number, title: string, stars: StarCount }
export type Category = { name: string, books: Array<Book> }

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
