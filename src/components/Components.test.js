import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitForElement,
} from '@testing-library/react'

import SortingGroup from './SortingGroup'
import FilteringGroup from './FilteringGroup'
import Table from './Table'

describe('components', () => {
  test('renders sorting group component', async () => {
    render(<SortingGroup />)

    expect(screen.getByText('Ordenar:')).toBeInTheDocument()
    expect(screen.getByText('A-Z')).toBeInTheDocument()
    expect(screen.getByText('Z-A')).toBeInTheDocument()
    expect(screen.getByText('5 a 0')).toBeInTheDocument()
    expect(screen.getByText('0 a 5')).toBeInTheDocument()
    expect(screen.getAllByText(/o por puntuación:/)).toHaveLength(1)
    expect(screen.getByText('Alfabéticamente:')).toBeInTheDocument()

    fireEvent.click(screen.getByText('A-Z'))

    await waitForElement(() => screen.getByText('Seleccionado: A-Z'))
  })

  test('renders filtering group component', () => {
    render(<FilteringGroup />)

    expect(screen.getByText('Populares')).toBeInTheDocument()
    expect(screen.getByText('Mejor valoradas')).toBeInTheDocument()
    expect(screen.getByText('Mas vistas')).toBeInTheDocument()
  })

  test('renders table component', () => {
    render(<Table />)

    expect(screen.getByRole('table')).toBeEnabled()
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Poster')).toBeInTheDocument()
    expect(screen.getByText('Puntuación')).toBeInTheDocument()
    expect(screen.getByText('Favoritos')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(5)
    expect(screen.getAllByRole('cell')).toHaveLength(16)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
