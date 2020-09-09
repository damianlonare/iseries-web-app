import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

describe('layouts', () => {
  test('renders Header layout', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toHaveClass('app-header')
    expect(screen.getByText(/iSeries/)).toBeInTheDocument()
  })

  test('renders Content layout', async () => {
    render(<Content />)

    expect(screen.getByRole('main')).toHaveClass('app-content')

    expect(screen.getAllByRole('button')).toHaveLength(11)
    expect(screen.getByRole('table')).toBeEnabled()

    fireEvent.click(screen.getByTestId('serieTitle1'))
    await expect(screen.getByText(/Detalle/)).toBeInTheDocument()
    expect(screen.queryByTestId('serieTitle1')).not.toBeInTheDocument()

    /* 
      TODO: Buscar como hacer un mock del window.location.assign('/')
      expect(screen.getByText('Regresar')).toBeInTheDocument()
      fireEvent.click(screen.getByText('Regresar'))
      await expect(screen.queryByText('Regresar')).not.toBeInTheDocument() 
    */
  })

  test('renders Footer layout', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toHaveClass('app-footer')
    expect(screen.getByText(/Damian Arechar/)).toBeInTheDocument()
  })
})
