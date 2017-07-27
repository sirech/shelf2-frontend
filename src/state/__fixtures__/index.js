export const books = () => (
  {
    entities: {
      books: {
        '4': {
          id: 4,
          title: 'Fear and Trembling',
          year: 2016,
          stars: 5,
          category: 'history'
        },
        '6': {
          id: 6,
          title: 'The Painted Veil',
          year: 2016,
          stars: 1,
          category: 'sociology'
        },
        '7': {
          id: 7,
          title: 'Things Fall Apart',
          year: 2016,
          stars: 1,
          category: 'other'
        },
        '8': {
          id: 8,
          title: 'Alone on a Wide, Wide Sea',
          year: 2016,
          stars: 2,
          category: 'sociology'
        },
        '9': {
          id: 9,
          title: 'I Know Why the Caged Bird Sings',
          year: 2016,
          stars: 2,
          category: 'other'
        },
        '10': {
          id: 10,
          title: 'Carrion Comfort',
          year: 2016,
          stars: 1,
          category: 'other'
        },
        '11': {
          id: 11,
          title: 'Time To Murder And Create',
          year: 2016,
          stars: 2,
          category: 'history'
        }
      }
    },
    result: [
      8,
      10,
      4,
      9,
      6,
      7,
      11
    ]
  }
)

export const years = () => (
  {
    entities: {
      years: {
        '2010': {
          year: 2010,
          count: 1
        },
        '2012': {
          year: 2012,
          count: 1
        },
        '2013': {
          year: 2013,
          count: 1
        },
        '2014': {
          year: 2014,
          count: 1
        },
        '2016': {
          year: 2016,
          count: 7
        }
      }
    },
    result: [
      2010,
      2012,
      2013,
      2014,
      2016
    ]
  }
)

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
        model: 'form.book.title',
        value: ''
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

export default state
