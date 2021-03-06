export type StarCount = 1 | 2 | 3 | 4 | 5
export type Categories = 'sociology' | 'software' | 'econ' | 'history' | 'other'

export interface BookForm {
  title: string
  description: string
  stars: StarCount
  category: Categories
  year: number
}
export type Book = BookForm & { id: number }
export interface Category {
  name: Categories
  books: Book[]
}

export interface Year {
  year: number
  count: number
}

// State

type Result = number[]

export interface NormalizedBooks {
  result: Result
  entities: {
    books: { [id: string]: Book }
  }
}

export interface NormalizedYears {
  result: Result
  entities: {
    years: { [id: string]: Year }
  }
}
