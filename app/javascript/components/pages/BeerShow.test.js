import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route,Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import BeerShow from "./BeerShow"
import beers from "../../MockBeer";
import userEvent from "@testing-library/user-event"

    render(
        <MemoryRouter initialEntries={["/beershow/1"]}>
            <Routes>
                <Route path="/beershow/:id" element={<BeerShow beers={beers}/>}/>
          </Routes>
        </MemoryRouter>
      );
  
    describe("<BeerShow />", () => {
    it("renders the page without crasing", () => {
    });

    it("properly displays beer name header", () => {
      expect("Test Beer").toBeInTheDocument;
    });
    it("properly displays brewery name header", () => {
        expect("Aaron Brewing").toBeInTheDocument;
      });
    it("has a delete button for a register user", () => {
      render(
        <BrowserRouter>
          <BeerShow logged_in={true} />
        </BrowserRouter>
      )
      const deleteBeer = userEvent.click(
        screen.getByRole("link", { name: /delete/i })
      )
    })
    it("has an edit button for a register user", () => {
      render(
        <BrowserRouter>
          <BeerShow logged_in={true} />
        </BrowserRouter>
      )
      const editBeer = userEvent.click(
        screen.getByRole("link", { name: /edit/i })
      )
    })
    it("has a like this beer button for a register user", () => {
      render(
        <BrowserRouter>
          <BeerShow logged_in={true} />
        </BrowserRouter>
      )
      const likedBeer = userEvent.click(
        screen.getByRole("link", { name: /like this beer/i })
      )
    })
    it("has a all beers button for a register user", () => {
      render(
        <BrowserRouter>
          <BeerShow />
        </BrowserRouter>
      )
      const allBeers = userEvent.click(
        screen.getByRole("link", { name: /all beers/i })
      )
    })

})