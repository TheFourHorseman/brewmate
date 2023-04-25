import React from "react"
import { render } from "@testing-library/react"
import Home from "./Home"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"

describe("<Home />", () => {
    it ("renders without crashing", () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    screen
        const text = screen.getByText(/welcome to brewmate/i)
            expect(text).toBeInTheDocument()
    })
})