import React from 'react'

import { fullRender } from 'test'
import state from 'state/__fixtures__'

import authenticated from '../authenticated'

describe('authenticated', () => {
  // eslint-disable-next-line
  const Dummy = () => <div>Mock</div>

  it('renders the component if authenticated is required', () => {
    const Component = authenticated()(Dummy)
    const { component } = fullRender(<Component />, state())
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('does not render the component if authenticated is required and authentincation is not set', () => {
    const currentState = state()
    currentState.login.authenticated = false
    const Component = authenticated()(Dummy)
    const { component } = fullRender(<Component />, currentState)
    expect(component.toJSON()).toBeNull()
  })

  it('does not render the component if authenticated is not required', () => {
    const Component = authenticated(false)(Dummy)
    const { component } = fullRender(<Component />, state())
    expect(component.toJSON()).toBeNull()
  })
})
