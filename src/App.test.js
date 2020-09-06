import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'

describe('App', () => {
  test('renders App and layouts inside of it', () => {
    render(<App />)

    expect(screen.getByTestId("header")).toBeEnabled()
    expect(screen.getByTestId("content")).toBeEnabled()
    expect(screen.getByTestId("footer")).toBeEnabled()
  })
})

describe('layouts', () => {
  test('renders Header layout', () => {
    render(<Header />)

    expect(screen.getByTestId("header")).toHaveClass("app-header")
  })

  test('renders Content layout', () => {
    render(<Content />)

    expect(screen.getByTestId("content")).toHaveClass("app-content")

    expect(screen.getByTestId("btn-menu-group")).toBeEnabled()

    expect(screen.getByText("Populares")).toBeInTheDocument()
    expect(screen.getByText("Mejor valoradas")).toBeInTheDocument()
    expect(screen.getByText("Mas vistas")).toBeInTheDocument()

    expect(screen.getByTestId("table")).toBeEnabled()
    expect(screen.getByText("Nombre")).toBeInTheDocument()
    expect(screen.getByText("Poster")).toBeInTheDocument()
    expect(screen.getByText("Puntuación")).toBeInTheDocument()
    expect(screen.getByText("Favoritos")).toBeInTheDocument()
    expect(screen.getAllByTestId("table-row")).toHaveLength(1)
  })
  
  test('renders Footer layout', () => {
    render(<Footer />)

    expect(screen.getByTestId("footer")).toHaveClass("app-footer")
  })  
})
