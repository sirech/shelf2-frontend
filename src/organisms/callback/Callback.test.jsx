import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Callback } from './Callback'

describe('components', () => {
  describe('Callback', () => {
    it('does not blow up', () => {
      const component = shallow(<Callback />)
      expect(toJson(component)).toMatchSnapshot()
    })

    it('renders a redirect if authenticated', () => {
      const component = shallow(<Callback authenticated />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
