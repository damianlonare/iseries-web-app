import React from "react";
import { render, screen } from "@testing-library/react";

import Table from "./Table";

describe("components", () => {
  test("renders table component", () => {
    render(<Table />);

    expect(screen.getByRole("table")).toBeEnabled();
    expect(screen.getByText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Poster")).toBeInTheDocument();
    expect(screen.getByText("Puntuación")).toBeInTheDocument();
    expect(screen.getByText("Favoritos")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(5);
    expect(screen.getAllByRole("cell")).toHaveLength(16);
    expect(screen.getAllByRole("img")).toHaveLength(4);
  });
});
