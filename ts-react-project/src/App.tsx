import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todos title="Go to gym" description="Gynm jao" done={true}></Todos>
    </>
  )
}
interface TodoProp{
  title:string,
  description:string,
  done:boolean
}

function Todos(props : TodoProp){
  return <div>
    {props.title}{props.description}{props.done}
  </div>
}

export default App
