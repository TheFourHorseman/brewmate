import React from 'react'
import {Button} from "reactstrap"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="not-found">
            <p>You're empty.</p>
            <NavLink to="/beerindex"><Button>Back to All Beers</Button></NavLink>
        </div>
    
    </>
  )
} 

export default NotFound