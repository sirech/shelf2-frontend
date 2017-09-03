module.exports = {
  env: {
    es6: true,
    mocha: true,
    "jest/globals": true
  },
  "extends": [
    "standard",
    "standard-react",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "jest",
    "flowtype"
  ],
  "globals": {
    "localStorage": true
  }
}
