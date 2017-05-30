import React from 'react'
import { fullRender } from '../../test'
import NavigationItem from './NavigationItem'

describe('components', () => {
  describe('NavigationItem', () => {
    it('renders correctly', () => {
      const { component } = fullRender(<NavigationItem year='2016' count='2' />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
})
