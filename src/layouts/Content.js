import React from 'react'
import './Content.css'
import SortingGroup from '../components/SortingGroup'
import FilteringGroup from '../components/FilteringGroup'
import Table from '../components/Table'

function Content() {
  return (
    <section role="main" className="app-content">
      <SortingGroup />
      <FilteringGroup />
      <Table />
    </section>
  )
}

export default Content
