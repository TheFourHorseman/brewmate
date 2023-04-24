import React from 'react'
import {Button} from "reactstrap"

const NotFound = () => {
  return (
    <>
    <div className="not-found">
    <p>You're empty.</p>
    <Button href={"/beerindex"}>Back to All Beers</Button>
    </div>
    
      </>
  )
} 

export default NotFound