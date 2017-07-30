import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { BookCreator } from './BookCreator'

describe('components', () => {
  describe('BookCreator', () => {
    it('renders correctly', () => {
      const component = shallow(<BookCreator opened valid />)
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
