import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import NewUser from "../components/pages/NewUser";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<NewUser />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NewUser />
      </BrowserRouter>
    );

    screen;
    const text = screen.getByText(/welcome to brewMate!/i);
    expect(text).toBeInTheDocument();
  });
  it("displays a functional button that calls upon the navigate function", () => {
    render(
      <BrowserRouter>
        <NewUser />
      </BrowserRouter>
    );
    const useNavigate = jest.fn();
    const navigate = jest.fn();

    const indexButton = screen.getByRole("button", {
      name: /i'm ready to view beers!/i,
    });
    screen.logTestingPlaygroundURL();
    expect(indexButton).toBeInTheDocument;
    fireEvent.click(indexButton);
    expect(navigate.mock.calls).toEqual(1);
  });
});

export default NewUser;
