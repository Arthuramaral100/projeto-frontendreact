import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContexts';
import remove from '../../icons/shopping-cart-cancel-button_icon-icons.com_56130.svg'
import { CardProdutoCarrinho, InfosCarrinho, ImagemProduto, CarrinhoElimina, BotaoElimina } from './cardCarrinhoStyled'

export function CardCarrinho(props){
    const {produto} = props;
    const context = useContext(GlobalContext)
    const { total, setTotal, compraCarrinho, setCompraCarrinho} = context
    
    const removeProduto = (id, preco) => {
        setTotal(total - preco)
        const produto = compraCarrinho && compraCarrinho.find((item) => item.id === id);
    
        if (produto.amount > 1) {
          const novoCarrinho = compraCarrinho.map((item) => {
            if (produto.id === item.id && item.amount >= 1) {
              return { ...item, amount: item.amount - 1, precoTotal: item.precoTotal - item.preco };
            } else {
              return item;
            }
          });
          setCompraCarrinho(novoCarrinho);
        } else {
      
          const carrinhoSemItem = compraCarrinho.filter((item) => item.id !== id);
          setCompraCarrinho(carrinhoSemItem);
        }
    }

    return(
    <CardProdutoCarrinho>
        <InfosCarrinho>
        <ImagemProduto src={produto.imagem} alt='imagem do produto' />
        <div>
        <h1>{produto.nome}</h1>
        <h2>Qtd: {produto.amount}</h2>
        </div>
        </InfosCarrinho>
        <InfosCarrinho>
        <div>
        <h3>R${produto.preco},00</h3>
        <h1>R${produto.precoTotal},00</h1>
        </div>
        <BotaoElimina onClick={() => removeProduto(produto.id, produto.preco)}>
        <CarrinhoElimina src={remove} alt="Elimina do carrinho" />
        </BotaoElimina>
        </InfosCarrinho>
    </CardProdutoCarrinho>
    )
}