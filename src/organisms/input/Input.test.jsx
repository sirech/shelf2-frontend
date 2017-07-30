import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Input } from './Input'

describe('components', () => {
  describe('Input', () => {
    it('renders correctly', () => {
      const component = shallow(<Input name='title' type='text' />)
      expect(toJson(component)).toMatchSnapshot()
    })

    it('renders correctly for different types', () => {
      const component = shallow(<Input name='year' type='number' />)
      expect(toJson(component)).toMatchSnapshot()
    })

    it('displays error', () => {
      const component = shallow(<Input name='year' type='number' touched valid={false} messages={{err: 'Error'}} />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
