import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Items from "./components/Items"

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "/skol.jpg",
      name: "Skol Latao",
      description: "Imagine afogar as mágoas em [Quantidade de Skol Latão] Skol Latões, adquiridos com [valor inserido pelo usuário] reais. É o kit perfeito para fingir que a vida é uma festa sem fim—pelo menos até o próximo boleto chegar e lembrar que a realidade não bebe junto.",
    },
    {
      id: 2,
      image: "/unoMille.webp",
      name: "Uno Mille",
      description: "Pense em desfilar por aí com [Quantidade de Uno Mille] Uno Mille(s), conquistados com [valor inserido pelo usuário] reais. Esses carrinhos são o símbolo máximo de quem faz muito com pouco, rodando mais que promessas de academia em janeiro e ainda carregando um charme que nenhum SUV hypado consegue imitar.",
    },
    {
      id: 3,
      image: "/kwid.jpg",
      name: "Kwid",
      description: "O Kwid é aquele carrinho que parece saído de uma caixa de brinquedos, mas leva ao trabalho—ou pelo menos até o posto mais próximo com gasolina que não custe um rim. Com [valor inserido pelo usuário] reais, poderia ter [quantidade de kwid] dele(s), garantindo um transporte econômico e uma dose de humildade automotiva.",
    }
  ])

  return (
    <>
      <Header />
      <Items items={items} />
    </>
  )
}

export default App
