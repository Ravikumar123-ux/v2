import React from 'react'

function Child1(props) {
  return (
    <div>
        
        <input type="text" placeholder={props.Name} onChange={(e)=>props.SetName(e.target.value)} />
        
        <h1>Child1: {props.Name}</h1>
    </div>
  )
}

export default Child1