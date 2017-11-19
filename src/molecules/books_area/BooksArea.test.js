import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import BooksArea from './BooksArea'

describe('components', () => {
  describe('BooksArea', () => {
    it('renders correctly', () => {
      const component = shallow(<BooksArea />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
