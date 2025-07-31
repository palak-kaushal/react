import React from 'react'
import ReactPlayer from 'react-player'

const Rplayer=() =>{
  return (
    <div>
    <h1>this is a player component</h1>
    <ReactPlayer src="https://youtu.be/4MrTN-LLuJs?si=oz5UDdE-EX-C5USh" playing ={false} controls ={true} width={"100%"} height={"600px"}/>
    </div>
  )
}

export default Rplayer;