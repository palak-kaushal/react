import React from 'react'
import Child2 from './Chlid2'

const Child1 = () => {
  const a = "context data"

  return (
    <div>
      <h1>Name</h1>
      <Child2 message = {a}/>
    </div>
  )
}

export default Child1