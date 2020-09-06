import React from 'react';
import './Content.css'

function Content() {
    return (
      <section role="main" className="app-content">
        <div className="btn-menu-group">
          <button role="button">Populares</button>
          <button role="button">Mejor valoradas</button>
          <button role="button">Mas vistas</button>
        </div>
        <table role="table">
          <thead>
            <tr role="row">
              <th>Nombre</th>
              <th>Poster</th>
              <th>Puntuación</th>
              <th>Favoritos</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row">
              <td>row</td>
            </tr>                        
          </tbody>
        </table>
      </section>
    )
}

export default Content