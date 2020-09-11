import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import SerieDetails from './SerieDetails'

describe('SerieDetails', () => {
  test('renders SerieDetails page', async () => {
    render(<SerieDetails />)

    expect(screen.getByText('Descripción')).toBeInTheDocument()
    expect(screen.getByText('Genero')).toBeInTheDocument()
    expect(screen.getByText('Duración')).toBeInTheDocument()

    expect(screen.getByText('No es favorito')).toBeInTheDocument()
    fireEvent.click(screen.getByText('No es favorito'))
    await expect(screen.getByText('Es favorito')).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
