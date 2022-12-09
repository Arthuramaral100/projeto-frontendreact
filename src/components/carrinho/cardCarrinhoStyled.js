import styled from "styled-components"

export const InfosCarrinho = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
            div{
                display: flex;
                flex-direction: column;
                padding: 0 15px;
                h1{
                    font-size: 20px;
                }
                h3{
                    color: gray;
                }
            }
`
export const ImagemProduto = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 10px;
`
export const BotaoElimina = styled.button`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    background-color: red;
    border: 0.5px solid black;
    cursor: pointer;
     :active{
        width: 28px;
        height: 28px;
    }
`

export const CarrinhoElimina = styled.img`
    width: 20px;
    height: 20px;
`

export const CardProdutoCarrinho = styled.div`
    width: 98%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid gray;
`

