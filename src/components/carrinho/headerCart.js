import { useNavigate } from "react-router-dom";
import { HeaderCarrinho, NameSite } from "./headerCartStyled";
import {goToHomePage} from "../../router/coordinator"

export function HeaderCart(){
    
    const navigate = useNavigate()

    return(
    <HeaderCarrinho>
        <NameSite>
        <h1 onClick={() => goToHomePage(navigate)}>← Star Market</h1>
        <h2>Meu Carrinho</h2>
        </NameSite>
    </HeaderCarrinho>
    )
}