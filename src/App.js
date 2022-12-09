import React from "react";
import {Container} from './appStyled'
import {Footer} from './components/footer/footer'
import { Router } from "./router/Router";
import GlobalFonts from "./fonts/fonts"
import { GlobalContext } from "./contexts/GlobalContexts";
import { useState } from "react";
import produtos from "./produtos/produtos.json"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [input, setInput] = useState("");
  const [categ, setCateg] = useState("Tudo");
  const [price, setPrice] = useState("Tudo");
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(99999);
  const [compraCarrinho, setCompraCarrinho] = useState([]);
  const [total, setTotal] = useState(0);


  function adicionandoCompra(id) {
    const i = compraCarrinho.findIndex((produto) => produto.id === id);
    if (i !== -1) {
            const novoCarrinho = [...compraCarrinho]
          novoCarrinho[i] = { ...novoCarrinho[i], amount: novoCarrinho[i].amount + 1 };
          novoCarrinho[i] = {...novoCarrinho[i], precoTotal: novoCarrinho[i].preco * novoCarrinho[i].amount }  
          setCompraCarrinho(novoCarrinho)
        } else {
          const produtoEncontrado = produtos.find((item) => item.id === id);
          const novoProduto = { ...produtoEncontrado, amount: 1, precoTotal: produtoEncontrado.preco };
          const novaLista = [...compraCarrinho, (compraCarrinho[1] = novoProduto)];
          setCompraCarrinho(novaLista);
        }
        compraCarrinho.map((produto)=>{
          setTotal(total + produto.preco)
        })
      }

      localStorage.setItem("carrinho", JSON.stringify(compraCarrinho))

      const context = {
        input,
        setInput,
        categ,
        setCateg,
        price,
        setPrice,
        valorMin,
        setValorMin,
        valorMax,
    setValorMax,
    compraCarrinho,
    setCompraCarrinho,
    total,
    setTotal,
    adicionandoCompra, 
  }
  console.log(compraCarrinho.length);
  return (
    <Container>
      <GlobalContext.Provider value={context} >
      <ChakraProvider>
      <GlobalFonts />
      <Router/>
      <Footer/>
      </ChakraProvider>
      </GlobalContext.Provider>
    </Container>
  );
}

export default App;
