import { Container } from "../appStyled"
import { MainHeader, Name } from "../components/header/headerStyled"
import { MainContainer } from "../components/main/mainStyled"


export const ErrorPage = () =>{
    <Container>
    <MainHeader>
    <Name>
    <h1>Star Market</h1>
    </Name>
    </MainHeader>
    <MainContainer>
        <h1>Página não encontrada :/</h1>
    </MainContainer>
    </Container>
}