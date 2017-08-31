import books from './books'
import years from './years'
import form from './form'

const modal = () => ({
  opened: false
})

const login = () => ({
  authenticated: true
})

const state = () => {
  return {
    books: books(),
    years: years(),
    form: form(),
    modal: modal(),
    login: login()
  }
}

export { books, years, form, login }
export default state
