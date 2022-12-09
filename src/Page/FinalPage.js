import { useNavigate } from "react-router-dom"
import {Success} from "../components/finalizado/finish"
import { MainHeader, Name } from "../components/header/headerStyled"
import { AlertFinal, MainContainer } from "../components/main/mainStyled"
import { goToHomePage } from "../router/coordinator"


export const FinalPage = () =>{
    const navigate = useNavigate()
    return(
        <>
        <MainHeader>
            <Name><h1 onClick={() => goToHomePage(navigate)}>← Star Market</h1></Name>
        </MainHeader>
        <MainContainer>
            <Success/>
        </MainContainer>
        </>
    )
}