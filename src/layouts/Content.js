import React from 'react';

function Content() {
    return (
      <section className="app-content" data-testid="content">
        <table data-testid="series-table">
        <thead>
            <tr>
                <th>Nombre</th>
            </tr>
        </thead>
        </table>
      </section>
    )
}

export default Content