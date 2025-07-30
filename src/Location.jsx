import React from 'react'
import { useLocation } from 'react-router-dom'

const Location=() => {
    const Location =useLocation()
    console.log(Location)


  return (
    <div>{location.pathname}</div>
  )
}

export default Location