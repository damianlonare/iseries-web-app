import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'


describe('layouts', () => {
  test('renders Header layout', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toHaveClass('app-header')
    expect(screen.getByText(/iSeries/)).toBeInTheDocument()
  })

  test('renders Content layout', () => {
    render(<Content />)

    expect(screen.getByRole('main')).toHaveClass('app-content')

    expect(screen.getAllByRole('button')).toHaveLength(7)

    expect(screen.getByText('Populares')).toBeInTheDocument()
    expect(screen.getByText('Mejor valoradas')).toBeInTheDocument()
    expect(screen.getByText('Mas vistas')).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeEnabled()

    expect(screen.getByText('Ordenar:')).toBeInTheDocument()
    expect(screen.getByText('A-Z')).toBeInTheDocument()
    expect(screen.getByText('Z-A')).toBeInTheDocument()
    expect(screen.getByText('5 a 0')).toBeInTheDocument()
    expect(screen.getByText('0 a 5')).toBeInTheDocument()
    expect(screen.getAllByText(/o por puntuación:/)).toHaveLength(1)
    expect(screen.getByText('Alfabéticamente:')).toBeInTheDocument()
  })
  
  test('renders Footer layout', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toHaveClass('app-footer')
    expect(screen.getByText(/Damian Arechar/)).toBeInTheDocument()
  })  
})
