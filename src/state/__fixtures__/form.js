const form = () => ({
  book: {
    title: '',
    year: 2017,
    description: '',
    stars: 1,
    category: 'software'
  },
  forms: {
    $form: {
      initialValue: {
        book: {
          title: '',
          year: 2017,
          description: '',
          stars: 1,
          category: 'software'
        }
      },
      focus: false,
      pending: false,
      pristine: true,
      submitted: false,
      submitFailed: false,
      retouched: false,
      touched: false,
      valid: true,
      validating: false,
      validated: false,
      validity: {},
      errors: {},
      intents: [],
      model: 'form',
      value: {
        book: {
          title: '',
          year: 2017,
          description: '',
          stars: 1,
          category: 'software'
        }
      }
    },
    book: {
      $form: {
        initialValue: {
          title: '',
          year: 2017,
          description: '',
          stars: 1,
          category: 'software'
        },
        focus: false,
        pending: false,
        pristine: true,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book',
        value: {
          title: '',
          year: 2017,
          description: '',
          stars: 1,
          category: 'software'
        }
      },
      title: {
        initialValue: '',
        focus: false,
        pending: false,
        pristine: false,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book.title',
        value: 'stuff'
      },
      year: {
        initialValue: 2017,
        focus: false,
        pending: false,
        pristine: true,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book.year',
        value: 2017
      },
      description: {
        initialValue: '',
        focus: false,
        pending: false,
        pristine: true,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book.description',
        value: ''
      },
      stars: {
        initialValue: 1,
        focus: false,
        pending: false,
        pristine: true,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book.stars',
        value: 1
      },
      category: {
        initialValue: 'software',
        focus: false,
        pending: false,
        pristine: true,
        submitted: false,
        submitFailed: false,
        retouched: false,
        touched: false,
        valid: true,
        validating: false,
        validated: false,
        validity: {},
        errors: {},
        intents: [],
        model: 'form.book.category',
        value: 'software'
      }
    }
  }
})

export default form
