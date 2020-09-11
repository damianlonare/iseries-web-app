import React, { useState, useEffect } from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'
import SerieDetail from '../pages/SerieDetail'

function Content() {
  const [orderBy, setOrderBy] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [seriesList, setSeriesList] = useState([])
  const [serieSelected, setSerieSelected] = useState(null)
  const [favoritedSeries, setFavoritedSeries] = useState([])

  // useEffect(() => {
  //   if (!serieSelected) return

  //   const params = new URLSearchParams(window.location.search)
  //   params.set('id', serieSelected)

  //   window.history.replaceState(
  //     {},
  //     '',
  //     `${window.location.pathname}serie/?${params}`
  //   )
  // })

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
          // TODO: Handle response error...
        }
      )
  }, [seriesList.length === 0])

  useEffect(() => {
    const sortedSeriesList = [...seriesList].sort((a, b) => {
      if (orderBy === 'Z-A') {
        if (a.name > b.name) return -1
      }
      if (orderBy === 'A-Z') {
        if (a.name < b.name) return -1
      }
    })
    // setSeriesList([])
    setSeriesList(sortedSeriesList)
  }, [orderBy])

  function handleOnClickOrderBy(type) {
    setOrderBy(type)
  }

  function handleOnClickFilterBy(type) {
    setFilterBy(type)
  }

  function handleOnClickSerie(serie) {
    setSerieSelected(serie)
  }

  function handleOnClickIsFavorited(serie) {
    setFavoritedSeries([...favoritedSeries, serie])
  }

  return (
    <section role="main" className="app-content">
      {/* {!serieSelected ? ( */}
      <div>
        <SortingGroup
          handleOnClickOrderBy={handleOnClickOrderBy}
          orderBy={orderBy}
        />
        <FilteringGroup
          handleOnClickFilterBy={handleOnClickFilterBy}
          filterBy={filterBy}
        />
        <Table
          series={seriesList}
          handleOnClickSerie={handleOnClickSerie}
          handleOnClickIsFavorited={handleOnClickIsFavorited}
        />
      </div>
      {/* ) : ( // <SerieDetail />
      )} */}
    </section>
  )
}

export default Content
