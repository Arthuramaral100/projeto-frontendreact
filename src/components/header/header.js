import { BotaoCarrinho, ImagemCarrinho, MainHeader, Name, Search } from "./headerStyled"
import Carrinho from '../../icons/shopping-cart_icon-icons.com_56125.svg'
import RebelsLogo from '../../icons/icons8-rebelde.svg'
import JediLogo from '../../icons/icons8-jedi-order (1).svg'
import empireLogo from '../../icons/icons8-império.svg'
import { useNavigate } from "react-router-dom"
import { goToCartPage } from "../../router/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContexts"
export function Header (props){
    const context = useContext(GlobalContext);
    const {categ, setCateg, input, setInput} = context

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }

    function onChangeCateg(event){
        setCateg(event.target.value)
    }

    const navigate = useNavigate()
    
    return(
        <MainHeader
        categ={categ}>
            <Name categ={categ}>
            <h1>Star Market</h1>
            {categ !== 'Tudo' && <img src={categ === 'Jedi' ? JediLogo : '' || categ === 'Rebeldes' ? RebelsLogo : '' || categ === 'Sith' ? empireLogo : '' } alt=''/> }
            </Name>
            <Search>
            <select
            value={categ}
            onChange={onChangeCateg}
            >
                <option value='Tudo'>Categorias</option>
                <option value='Rebeldes'>Rebeldes</option>
                <option value= 'Jedi'>Jedi</option>
                <option value='Sith'>Sith</option>
            </select>
                <input
                    type={'text'}
                    value={input}
                    onChange={onChangeInput}
                    placeholder='Digite aqui...'
                />
            <BotaoCarrinho onClick={()=> goToCartPage(navigate)}><ImagemCarrinho src={Carrinho} alt='Carrinho' /></BotaoCarrinho>
            </Search>
        </MainHeader>
    )
}