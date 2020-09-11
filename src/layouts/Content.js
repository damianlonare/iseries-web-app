import React, { useState, useEffect } from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'
import SerieDetail from '../pages/SerieDetail'

function Content() {
  const [serieSelected, setSerieSelected] = useState(null)
  const [seriesList, setSeriesList] = useState([])

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
    fetch(process.env.REACT_APP_API + 'tv/popular', {
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer ' + process.env.REACT_APP_BEARER_TOKEN,
      }),
    })
      .then((res) => res.json())
      .then(
        (response) => {
          setSeriesList(response.results)
        },
        (response) => {
          console.log('error response')
          console.log(response)
        }
      )
  }, [])

  return (
    <section role="main" className="app-content">
      {!serieSelected ? (
        <div>
          <SortingGroup />
          <FilteringGroup />
          <Table
            series={seriesList}
            serieSelected={(serie) => setSerieSelected(serie)}
          />
        </div>
      ) : (
        <SerieDetail />
      )}
    </section>
  )
}

export default Content
