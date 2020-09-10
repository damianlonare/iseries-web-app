import React, { useState, useEffect } from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'
import SerieDetail from '../pages/SerieDetail'

function Content() {
  const [serieSelected, setSerieSelected] = useState(null)

  useEffect(() => {
    if (!serieSelected) return

    const params = new URLSearchParams(window.location.search)
    params.set('id', serieSelected)

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}serie/?${params}`
    )
  })

  useEffect(() => {
    fetch(`${process.env.API}/tv/popular`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('success response')
          console.log(result)
        },
        (error) => {
          console.log('error response')
          console.log(error)
        }
      )
  }, [])

  return (
    <section role="main" className="app-content">
      {!serieSelected ? (
        <div>
          <SortingGroup />
          <FilteringGroup />
          <Table serieSelected={(serie) => setSerieSelected(serie)} />
        </div>
      ) : (
        <SerieDetail />
      )}
    </section>
  )
}

export default Content
