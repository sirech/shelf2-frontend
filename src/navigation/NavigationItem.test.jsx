import React from 'react'
import NavigationItem from './NavigationItem'
import { fullRender } from 'test'

describe('components', () => {
  describe('NavigationItem', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<NavigationItem year="2016" count="2" />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
