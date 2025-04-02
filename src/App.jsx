import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Items from "./components/Items"
import AddItem from './components/AddItem'

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Lorem",
      description: "Lorem ipsum",
    },
    {
      id: 2,
      name: "Lorem",
      description: "Lorem ipsum",
    },
    {
      id: 3,
      name: "Lorem",
      description: "Lorem ipsum",
    }
  ])

  return (
    <>
      <Header />
      <Items items={items} />
      <AddItem />
    </>
  )
}

export default App
