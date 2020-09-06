import React from "react";
import "./Table.css";

function Table() {
  return (
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
          <td role="cell">Parasite</td>
          <td role="cell">Poster img</td>
          <td role="cell">5</td>
          <td role="cell">
            <span role="img" aria-label="favorite-icon">
              ⭐️
            </span>
          </td>
        </tr>
        <tr role="row">
          <td role="cell">Parasite</td>
          <td role="cell">Poster img</td>
          <td role="cell">3</td>
          <td role="cell">
            <span role="img" aria-label="favorite-icon">
              ★
            </span>
          </td>
        </tr>
        <tr role="row">
          <td role="cell">Parasite</td>
          <td role="cell">Poster img</td>
          <td role="cell">3</td>
          <td role="cell">
            <span role="img" aria-label="favorite-icon">
              ⭐️
            </span>
          </td>
        </tr>
        <tr role="row">
          <td role="cell">Parasite</td>
          <td role="cell">Poster img</td>
          <td role="cell">4</td>
          <td role="cell">
            <span role="img" aria-label="favorite-icon">
              ⭐️
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
