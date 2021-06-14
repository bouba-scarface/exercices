import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Header } from "../src/components/product-card/header";

describe("Task component", () => {
  beforeEach(() => {
    render(<Task name={"Task"} />);
  });

  afterEach(() => {
    cleanup();
  });

  test("should display the name of the task", () => {
    expect.assertions(1);

    const h2 = screen.getByText("Task");

    expect(h2).toBeInTheDocument();
  });

  test("should display the status of the task", () => {
    expect.assertions(1);

    const p = screen.getByText("In progress");

    expect(p).toBeInTheDocument();
  });

  test("should display a button with the text 'Done'", () => {
    expect.assertions(1);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});