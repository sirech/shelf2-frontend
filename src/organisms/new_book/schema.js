import * as Yup from 'yup'

const bookSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'min length 5')
    .max(200, 'max length 200')
    .required('Required'),
  year: Yup.number()
    .min(2000, 'starting at 2000')
    .max(2100, 'ending at 2100')
    .required('Required'),
  stars: Yup.number()
    .min(1, 'min 1 star')
    .max(5, 'max 5 stars')
    .required('Required'),
})

export default bookSchema
