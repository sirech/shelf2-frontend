import books from './books'
import years from './years'
import form from './form'

const modal = () => ({
  opened: false
})

const state = () => {
  return {
    books: books(),
    years: years(),
    form: form(),
    modal: modal()
  }
}

export { books, years, form }
export default state
