import { namespace, bookModel } from './constants'
import { combineForms } from 'react-redux-form'

const initialBook = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  stars: 1
}

export default combineForms({
  [bookModel]: initialBook
}, namespace)
