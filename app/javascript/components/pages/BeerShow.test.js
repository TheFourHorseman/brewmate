import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route,Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import BeerShow from "./BeerShow"
import beers from "../../MockBeer";
  
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

})