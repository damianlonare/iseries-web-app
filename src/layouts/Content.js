import React from 'react';
import './Content.css'

function Content() {
    return (
      <section className="app-content" data-testid="content">
        <div className="btn-menu-group" data-testid="btn-menu-group">
          <button>Populares</button>
          <button>Mejor valoradas</button>
          <button>Mas vistas</button>
        </div>
        <table data-testid="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Poster</th>
              <th>Puntuación</th>
              <th>Favoritos</th>
            </tr>
          </thead>
          <tbody>
            <tr data-testid="table-row">
              <td>row</td>
            </tr>                        
          </tbody>
        </table>
      </section>
    )
}

export default Content