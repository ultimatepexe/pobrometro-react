import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Items from "./components/Items"
import Footer from './components/Footer'

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
    },
    {
      id: 4,
      image: "/coffee.jpg",
      name: "Café",
      description: `Café: o pó sagrado que arranca da cama e prepara para encarar o chefe, mesmo que o orçamento fique tremendo na base. Com [valor] reais, poderia encher o armário com [quantidade] pacotes de 500g, porque nada diz "sobrevivi à segunda-feira" como uma xícara fumegante e um leve arrependimento financeiro.`
    },
    {
      id: 5,
      image: "/leite.png",
      name: "Leite",
      description: "Leite: o líquido branquinho que jura deixar saudável, mas cujo preço sobe mais rápido que a pressão nas discussões familiares. Ainda assim, com [valor] reais, poderia levar para casa[quantidade]litros, mantendo o café com leite e o sonho de ossos fortes vivos por mais um dia."
    },
    {
      id: 6,
      image: "/ovos.png",
      name: "Ovos",
      description: `Os ovos já foram a salvação da cozinha simples, mas hoje fritar um é quase um evento de luxo. Com [valor] reais, poderia ostentar [quantidade] dúzia(s), transformando o café da manhã em uma experiência gourmet que até o Instagram vai invejar—seja lá o que "gourmet" signifique hoje em dia.`
    },
    {
      id: 7,
      image: "/brahma.png",
      name: "Brahma",
      description: `Brahma: a cerveja que promete uma festa épica, mas muitas vezes só anima o vizinho gritando pro juiz na TV. Com [valor] reais, poderia estocar [quantidade] fardos, perfeito para celebrar os gols ou afogar as derrotas com aquele gostinho gelado de "quem precisa de balada?".`
    },
    {
      id: 8,
      image: "/iphone8.png",
      name: "iPhone 8",
      description: "O iPhone 8 já foi o rei dos celulares, mas agora é o queridinho retrô pra fotografar a marmita com filtro vintage. Com [valor] reais, poderia ter [quantidade] dele(s), unindo nostalgia tecnológica e a certeza de que ainda dá pra impressionar—nem que seja no grupo do WhatsApp."
    },
    {
      id: 9,
      image: "/iphone15.png",
      name: "iPhone 15",
      description: "O iPhone 15 é aquele gadget que faz sentir no topo do mundo—até a fatura do cartão jogar lá de baixo. Com [valor] reais, poderia exibir [quantidade] dele(s), curtindo a inveja alheia enquanto planeja como pagar isso tudo com feijão e arroz até o fim do mês."
    },
    {
      id: 10,
      image: "/azeite.png",
      name: "Azeite",
      description: "Azeite: o ouro líquido que transforma qualquer receita, mesmo que o jantar acabe queimado na tentativa de parecer chef. Com [valor] reais, poderia levar [quantidade] garrafas de 500ml, porque até um macarrão meia-boca merece um toque de classe—e uma pitada de arrependimento no bolso."
    },
    {
      id: 11,
      image: "/corote.png",
      name: "Corote",
      description: "Corote: o titã das geladas, ideal pra quem quer festa barata e barulho garantido sem se preocupar com etiqueta. Com [valor] reais, poderia acumular [quantidade] litros, transformando qualquer rolê num evento épico que ninguém vai lembrar direito no dia seguinte."
    },
    {
      id: 12,
      image: "/c51.png",
      name: "51",
      description: `A 51 é a cachaça que aquece o peito e esfria o saldo bancário, perfeita pra brindar às decisões que já se sabe que serão questionadas depois. Com [valor] reais, poderia garantir [quantidade] litros, porque nada diz "viva o momento" como um gole ardente e uma promessa de ressaca.`
    },
    {
      id: 13,
      image: "/picanha.png",
      name: "Picanha",
      description: "Picanha: o soberano da churrasqueira, mais caro que o aluguel, mas capaz de fazer os vizinhos babarem de inveja a cada mordida suculenta. Com [valor] reais, poderia trazer para casa [quantidade de quilos de picanha] quilos, elevando o churrasco ao status de lenda local—e o ego junto."
    }
  ])

  return (
    <>
      <Header />
      <Items items={items} />
      <Footer />
    </>
  )
}

export default App
