import { Container } from "../appStyled"
import { CartContainer } from "../components/carrinho/carrinho"
import { HeaderCart } from "../components/carrinho/headerCart"

export const CartPage = (props) => {
    return(
        <Container>
            <HeaderCart/>
            <CartContainer/>
        </Container>
    )
}