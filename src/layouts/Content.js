import React from 'react';
import './Content.css'
import Table from '../components/Table'

function Content() {
    return (
      <section role="main" className="app-content">
        <p>Ordenar:</p>

        <span>Alfabéticamente:</span>
        {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
        &nbsp;

        <button>A-Z</button>
        <button>Z-A</button>

        {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
        &nbsp;

        <span>o por puntuación:</span>

        {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}
        &nbsp;

        <button>5 a 0</button>
        <button>0 a 5</button>

        {/* TODO: QUITAR, SE AGREGÓ SOLO PARA AYUDAR A ENTENDER MEJOR 
        ANTES DE LA IMPLEMENTACIÓN DE DISEÑO FINAL */}        
        <br /><br />

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