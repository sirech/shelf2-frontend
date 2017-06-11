// @flow

export type StarCount = 1 | 2 | 3 | 4 | 5
export type Book = { id: number, title: string, stars: StarCount }
export type Category = { name: string, books: Array<Book> }
