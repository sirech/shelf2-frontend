import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { BookForm } from './BookForm'

describe('components', () => {
  describe('BookForm', () => {
    it('renders correctly', () => {
      const component = shallow(<BookForm stars={3} />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
