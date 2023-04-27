import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import BeerShow from "../components/pages/BeerShow";
import beers from "../MockBeer";

const loggedIn = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route
          path="/beershow/:id"
          element={<BeerShow beers={beers} props={{ logged_in: true }} />}
        />
      </Routes>
    </MemoryRouter>
  );
};
const loggedInMyBeer = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route
          path="/beershow/:id"
          element={
            <BeerShow
              beers={beers}
              props={{ logged_in: true, current_user: { id: 1 } }}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("<BeerShow />", () => {
  it("renders the page without crasing", () => {
    loggedIn();
  });

  it("properly displays beer name header", () => {
    loggedIn();
    expect("Test Beer").toBeInTheDocument;
  });
  it("properly displays brewery name header", () => {
    loggedIn();
    expect("Aaron Brewing").toBeInTheDocument;
  });

  it("has a delete button for a register user", () => {
    loggedInMyBeer();

    const deleteBeer = screen.getByRole("button", { name: /delete/i });
    expect(deleteBeer).toBeInTheDocument();
  });
  it("has an edit button for a register user", () => {
    loggedInMyBeer();

    const editBeer = screen.getByRole("button", { name: /edit/i });
    expect(editBeer).toBeInTheDocument();
  });
  it("has a like this beer button for a register user", () => {
    loggedInMyBeer();

    const likeBeer = screen.getByRole("button", { name: /like this beer/i });
    expect(likeBeer).toBeInTheDocument();
  });
  it("has a all beers button", () => {
    loggedInMyBeer();

    const allBeers = screen.getByRole("link", { name: /all beers/i });
    expect(allBeers).toBeInTheDocument();
  });
});
