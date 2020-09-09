import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

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
    const btnSelectedOne = await screen.getByText('Seleccionado: A-Z')
    expect(btnSelectedOne).toBeInTheDocument()

    fireEvent.click(screen.getByText('Z-A'))
    const btnSelectedTwo = await screen.getByText('Seleccionado: Z-A')
    expect(btnSelectedTwo).toBeInTheDocument()

    fireEvent.click(screen.getByText('5 a 0'))
    const btnSelectedThree = await screen.getByText('Seleccionado: 5 a 0')
    expect(btnSelectedThree).toBeInTheDocument()

    fireEvent.click(screen.getByText('0 a 5'))
    const btnSelectedFour = await screen.getByText('Seleccionado: 0 a 5')
    expect(btnSelectedFour).toBeInTheDocument()
  })

  test('renders filtering group component', async () => {
    render(<FilteringGroup />)

    expect(screen.getByText('Populares')).toBeInTheDocument()
    expect(screen.getByText('Mejor valoradas')).toBeInTheDocument()
    expect(screen.getByText('Mas vistas')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Populares'))
    const btnSelectedOne = await screen.getByText('Seleccionado: Populares')
    expect(btnSelectedOne).toBeInTheDocument()

    fireEvent.click(screen.getByText('Mejor valoradas'))
    const btnSelectedTwo = await screen.getByText(
      'Seleccionado: Mejor valoradas'
    )
    expect(btnSelectedTwo).toBeInTheDocument()

    fireEvent.click(screen.getByText('Mas vistas'))
    const btnSelectedThree = await screen.getByText('Seleccionado: Mas vistas')
    expect(btnSelectedThree).toBeInTheDocument()
  })

  test('renders table component', async () => {
    render(<Table />)

    expect(screen.getByRole('table')).toBeEnabled()
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Poster')).toBeInTheDocument()
    expect(screen.getByText('Puntuación')).toBeInTheDocument()
    expect(screen.getByText('Favoritos')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(5)
    expect(screen.getAllByRole('cell')).toHaveLength(16)

    expect(screen.getAllByText('No es favorito')[0]).toBeInTheDocument()
    fireEvent.click(screen.getAllByTestId('1')[0])
    await expect(screen.getByText('Es favorito')).toBeInTheDocument()
  })
})
