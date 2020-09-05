import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Header from './layouts/Header'

describe('App', () => {
  test('renders App component', () => {
    render(<App />)
  })
})

describe('layouts', () => {
  test('renders Header component', () => {
    const { getByTestId, getByText } = render(<Header />)

    expect(getByTestId("header")).toHaveClass("app-header")
    expect(getByText('iSeries')).toBeInTheDocument()
  })
})
