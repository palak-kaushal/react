import React from 'react'
import{Route, useNavigate} from 'react-router-dom'

const Nav=() =>{
  const navigate=useNavigate()
  const handclick=(Route)=>{
    navigate(Route)
  }
  return (
    <div>
        <button onclick={()=>handclick("/")}>about</button>
        <button onclick={()=>handclick("contact")}>about</button>
        <button onclick={()=>handclick("service")}>about</button>
        
    </div>
  )
}

export default Nav