import React, { useState, useEffect } from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'
import SerieDetail from '../pages/SerieDetail'

function Content() {
  const [orderBy, setOrderBy] = useState('')
  const [filterBy, setFilterBy] = useState('popular')
  const [seriesList, setSeriesList] = useState([])
  const [serieSelected, setSerieSelected] = useState(null)
  const [favoritedSeriesList, setFavoritedSeriesList] = useState([])

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
    fetchApiDataForSeriesList()
  }, [seriesList.length === 0])

  useEffect(() => {
    const sortedSeriesList = [...seriesList].sort((a, b) => {
      if (orderBy === 'Z-A') {
        if (a.name > b.name) return -1
      }
      if (orderBy === 'A-Z') {
        if (a.name < b.name) return -1
      }
      if (orderBy === '0-100') {
        if (a.vote_average < b.vote_average) return -1
      }
      if (orderBy === '100-0') {
        if (a.vote_average > b.vote_average) return -1
      }
    })
    // setSeriesList([])
    setSeriesList(sortedSeriesList)
  }, [orderBy])

  useEffect(() => {
    fetchApiDataForSeriesList()
  }, [filterBy])

  useEffect(() => {
    localStorage.setItem(
      'favoritedSeriesList',
      JSON.stringify(favoritedSeriesList)
    )
  }, [favoritedSeriesList])

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
    const alreadyAdded = favoritedSeriesList.find((fs) => {
      return serie.id === fs.id
    })
    if (!alreadyAdded) {
      setFavoritedSeriesList([...favoritedSeriesList, serie])
    }
  }

  function handleOnClickIsNotFavorited(serie) {
    let _favoritedSeriesList = favoritedSeriesList
    const serieToRemoveIndex = favoritedSeriesList.findIndex((fs) => {
      return serie.id === fs.id
    })
    _favoritedSeriesList.splice(serieToRemoveIndex, 1)
    setFavoritedSeriesList([..._favoritedSeriesList])
  }

  function fetchApiDataForSeriesList() {
    fetch(`${process.env.REACT_APP_API}tv/${filterBy}`, {
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
          favoritedSeriesList={favoritedSeriesList}
          handleOnClickSerie={handleOnClickSerie}
          handleOnClickIsFavorited={handleOnClickIsFavorited}
          handleOnClickIsNotFavorited={handleOnClickIsNotFavorited}
        />
      </div>
      {/* ) : ( // <SerieDetail />
      )} */}
    </section>
  )
}

export default Content
