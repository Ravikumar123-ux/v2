import Child1 from './componants/Child1.jsx'
import Child2 from './componants/Child2.jsx'

import{ useState } from 'react'
import './App.css'

function App() {
  const[Name,SetName]=useState('0');

  return (
    <>
      <Child1 Name={Name} SetName={SetName}/>
      <Child2 Name={Name}  SetName={SetName} />
    </>
  )
}

export default App
