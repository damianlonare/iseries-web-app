import React, { useState, useEffect } from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'

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

  return (
    <section role="main" className="app-content">
      {!serieSelected ? (
        <div>
          <SortingGroup />
          <FilteringGroup />
          <Table serieSelected={(serie) => setSerieSelected(serie)} />
        </div>
      ) : (
        <div>Detalle</div>
      )}
    </section>
  )
}

export default Content
