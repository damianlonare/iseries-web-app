import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'


describe('layouts', () => {
  test('renders Header layout', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toHaveClass("app-header")
  })

  test('renders Content layout', () => {
    render(<Content />)

    expect(screen.getByRole("main")).toHaveClass("app-content")

    expect(screen.getAllByRole("button")).toHaveLength(3)

    expect(screen.getByText("Populares")).toBeInTheDocument()
    expect(screen.getByText("Mejor valoradas")).toBeInTheDocument()
    expect(screen.getByText("Mas vistas")).toBeInTheDocument()
    expect(screen.getByRole("table")).toBeEnabled()
  })
  
  test('renders Footer layout', () => {
    render(<Footer />)

    expect(screen.getByRole("contentinfo")).toHaveClass("app-footer")
  })  
})
