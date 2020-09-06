import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders App", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeEnabled();
    expect(screen.getByRole("main")).toBeEnabled();
    expect(screen.getByRole("contentinfo")).toBeEnabled();
  });
});
