
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContexts"
import { CardCarrinho } from "./CardCarrinho"
import { Cart, BotaoFinaliza, CartCatalogo, Total } from "./carrinhoStyled"
import { useNavigate } from "react-router-dom"
import { goToFinalPage, goToHomePage } from "../../router/coordinator"

export function CartContainer(props){
    const context = useContext(GlobalContext);
    const {compraCarrinho, setCompraCarrinho, total, setTotal} = context
    const navigate = useNavigate()

    const onClickFinalPage = () =>{
        if(compraCarrinho.length !== 0){
            goToFinalPage(navigate)
            setCompraCarrinho([])
            setTotal(0)
        } else{
            alert("Carrinho de Compra vazio!")
            goToHomePage(navigate)
        }
    }

    return(
        <Cart>
            <CartCatalogo>
            {compraCarrinho.map((produto) =>{
                return <CardCarrinho
                produto={produto}
                compraCarrinho={compraCarrinho}
                setCompraCarrinho={setCompraCarrinho}
                total={total}
                setTotal={setTotal}

                />
            })}
            </CartCatalogo>
            <BotaoFinaliza>
            <Total>TOTAL: R$ {total},00</Total>
            <button onClick={() => goToHomePage(navigate)} ><h1>Continuar Comprando</h1></button>
            <button onClick={() => onClickFinalPage()} ><h1>Finalizar Compra</h1></button>
            <h2>O FRETE mais rápido da galáxia!</h2>
            </BotaoFinaliza>
        </Cart>
    )
}