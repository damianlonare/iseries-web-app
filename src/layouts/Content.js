import React from 'react';
import './Content.css'
import Table from '../components/Table'

function Content() {
    return (
      <section role="main" className="app-content">
        <div className="btn-menu-group">
          <button>Populares</button>
          <button>Mejor valoradas</button>
          <button>Mas vistas</button>
        </div>
        <Table />
      </section>
    )
}

export default Content