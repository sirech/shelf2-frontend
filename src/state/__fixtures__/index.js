import R from 'ramda'

import books from './books'
import years from './years'
import form from './form'
import login from './login'

const modal = () => ({
  opened: false
})

const search = R.pipe(books, R.omit(['activeYear']))

const state = () => {
  return {
    books: books(),
    search: search(),
    years: years(),
    form: form(),
    modal: modal(),
    login: login()
  }
}

export { books, search, years, form, login }
export default state
