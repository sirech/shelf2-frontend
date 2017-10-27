import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Login } from './Login'

describe('components', () => {
  describe('Login', () => {
    it('does not blow up', () => {
      const component = shallow(<Login />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
