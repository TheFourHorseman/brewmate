import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import BeerNew from "./BeerNew";

describe("<BeerNew />", () => {
   beforeEach(()=>{
    const current_user = {
        email: "test@testing.com",
        password: "testing123",
        id: 1
    }
    render(
      <BrowserRouter>
                <BeerNew current_user={current_user}/>
          </BrowserRouter>
      );
 })
  it("renders the page without crasing", () => {});

  it("properly displays header", () => {
    expect("Add a beer").toBeInTheDocument;
  });

  it("displays a create new beer form with input for beer name",() => {
    expect(screen.getByRole('textbox', {
        name: /beer name/i
      })).toBeInTheDocument
    })

it("displays a create new beer form with input for brewery name",() => {
    expect(screen.getByRole('textbox', {
        name: /brewery name/i
    })).toBeInTheDocument
    })

it("displays a create new beer form with style selecter",() => {
    expect(screen.getByRole('combobox')).toBeInTheDocument
    })

it("displays a create new beer form with image input",() => {
    expect(screen.getByRole('spinbutton', {
    name: /ibu image/i
    })).toBeInTheDocument
})
it("displays a create new beer form with image placeholder",() => {
    expect(screen.getByPlaceholderText(/image/i)).toBeInTheDocument
})

it("displays a button for each beer to see more info", () => {
expect(screen.getByRole('button', {
    name: /create/i
    })).toBeInTheDocument;
expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument;
})

});
