import { MainFooter, Redes } from "./footerStyled";
import gitHub from "../../icons/icons8-github.svg"
import instagram from "../../icons/icons8-instagram.svg"
import linkedin from "../../icons/icons8-linkedin-circundado.svg"

export function Footer (){
    return(
        <MainFooter>
            <Redes>
            <a href="https://www.instagram.com/arthur_amarallima/" target="_blank"><img src={instagram} alt="icone instagram" class="icone"/></a>
            <a href="https://github.com/Arthuramaral100" target="_blank"><img src={gitHub}alt="icone github" class="icone"/></a>
            <a href="https://www.linkedin.com/in/arthur-amaral-8b7672209/" target="_blank"><img src={linkedin} alt="icone linkedin" class="icone"/></a>
            </Redes>
        </MainFooter>
    )
}