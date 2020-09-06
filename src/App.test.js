import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'

describe('App', () => {
  test('renders App component', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId("header")).toBeEnabled()
    expect(getByTestId("content")).toBeEnabled()
    expect(getByTestId("footer")).toBeEnabled()
  })
})

describe('layouts', () => {
  test('renders Header component', () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId("header")).toHaveClass("app-header")
  })

  test('renders Content component', () => {
    const { getByTestId } = render(<Content />)

    expect(getByTestId("content")).toHaveClass("app-content")
  })
  
  test('renders Footer component', () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId("footer")).toHaveClass("app-footer")
  })  
})
