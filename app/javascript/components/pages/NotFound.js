import React from 'react'
import {Button} from "reactstrap"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="not-found">
          <video controls autolay>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-beer-foam-forming-in-a-glass-seen-from-close-up-8708-large.mp4" type="video/mp4" />
          </video>
            <p>You're empty.</p>
            <NavLink to="/beerindex"><Button>Back to All Beers</Button></NavLink>
        </div>
    </>
  )
} 

export default NotFound