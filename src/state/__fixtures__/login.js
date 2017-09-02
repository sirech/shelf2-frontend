const login = () => ({
  status: {
    authenticated: true
  },
  form: {
    login: {
      user: '',
      password: ''
    },
    forms: {
      $form: {
        initialValue: {
          login: {
            user: '',
            password: ''
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
        model: 'login.form',
        value: {
          login: {
            user: '',
            password: ''
          }
        }
      },
      login: {
        $form: {
          initialValue: {
            user: '',
            password: ''
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
          model: 'login.form.login',
          value: {
            user: '',
            password: ''
          }
        },
        user: {
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
          model: 'login.form.login.user',
          value: ''
        },
        password: {
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
          model: 'login.form.login.password',
          value: ''
        }
      }
    }
  }
})

export default login
