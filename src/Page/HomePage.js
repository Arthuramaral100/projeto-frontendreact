import { Container } from "../appStyled"
import {Header} from "../components/header/header"
import{ Main} from "../components/main/main"

export const HomePage = () =>{
    return(
      <Container>
        <Header/>
        <Main />
      </Container>
    )
}