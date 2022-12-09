import React from "react"
import { MainContainer, Catalogo } from "./mainStyled"
import { CardDoProduto } from "./cardProduto"
import produtos from '../../produtos/produtos.json'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContexts"

export function Main(){

    const context = useContext(GlobalContext)

    const {setCateg, setPrice, setValorMin, setValorMax, categ, price, valorMax, valorMin, input, setTotal, total} = context
    
    
    function onChangePrice(event){
        setPrice(event.target.value)
    }
    function onChangeValorMin(event){
        setValorMin(event.target.value)
    }
    function onChangeValorMax(event){
        setValorMax(event.target.value)
    }
    
    return(
        <MainContainer>
            <nav>
            <select
            value={price}
            onChange={onChangePrice}
            >
                <option value=''>Preço</option>
                <option value='menor'>Menor Preço</option>
                <option value='maior'>Maior Preço</option>
            </select>
            <div>
            <label id="min">Min</label>
            <input type='Number' id="min" value={valorMin} onChange={onChangeValorMin} />
            </div>
            <div>
            <label id="max">Máx</label>
            <input type='Number' id="max" value={valorMax} onChange={onChangeValorMax} />
            </div>
            </nav>
            <Catalogo>
                {produtos.filter((produto)=>{
                    return produto.nome.toLowerCase().includes(input.toLowerCase())
                })
                .filter((produto) =>{
                    return produto.categoria.includes(categ)
                })
                .filter((produto) =>{
                    return produto.preco >= valorMin
                })
                .filter((produto) =>{
                    return produto.preco <= valorMax
                })
                .sort((a, b) => a.preco > b.preco && price === 'menor' ? 1 : -1)
                .sort((a, b) => a.preco > b.preco && price === 'maior' ? -1 : 1)
                .map((produto) =>{
                    return(
                        <CardDoProduto
                        produto={produto}
                        key={produto.id}
                        total={total}
                        setTotal={setTotal}
                        />
                    )
                })
                }
            </Catalogo>
        </MainContainer>
    )
}