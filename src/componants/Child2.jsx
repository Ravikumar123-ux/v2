import React from 'react'

function Child2(props) {
  return (
    <div>
        <input type="text" placeholder={props.Name} onChange={(e)=>props.SetName(e.target.value)} />
        <h1>Child2 {props.Name}</h1>
    </div>
  )
}

export default Child2