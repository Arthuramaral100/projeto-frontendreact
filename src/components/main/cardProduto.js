import { CardProduto, Info, Botao, ImagemProduto } from "./cardProdutoStyled";
import Add from "../../icons/shopping-cart-add-button_icon-icons.com_56132.svg";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

export function CardDoProduto(props) {
  const context = useContext(GlobalContext);
  const { adicionandoCompra} = context;
  const {produto} = props;
  
  return (
    <CardProduto>
      <ImagemProduto src={produto.imagem} alt="imagem do produto" />
      <Info>
        <h1>{produto.nome}</h1>
        <h1>R${produto.preco},00</h1>
        <div>
          <button onClick={() => adicionandoCompra(produto.id)}>
            <h1>Comprar</h1>
            <Botao src={Add} alt="adicionar no carrinho" />
          </button>
        </div>
      </Info>
    </CardProduto>
  );
}
