import styled from "styled-components";

export const Cart = styled.div`
  min-height: 100vh ;
background-color: white;
  display: flex;
  @media screen and (max-device-width: 950px){
    flex-direction: column;
    gap: 20px;
}
`;
export const CartCatalogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:  60%;
  margin: 15px 10px 15px 0;
  @media screen and (max-device-width: 950px){
    width: 70% ;
}
  @media screen and (max-device-width: 950px){
    width: 100% ;
  border-right: 0px solid gray ;
  border-bottom: 1px solid gray ;
  padding-bottom: 15px ;

}
`;
export const Total = styled.h1`
 align-self: flex-end;
  margin: 50px 60px 0 0;
  border-bottom: 0.5px solid gray;
`
export const BotaoFinaliza = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  margin: 10px 10px 10px 0;
  border-radius: 15px;
  box-shadow: 1px 2px 3px 4px gray;
  @media screen and (max-device-width: 950px){
    width: 30% ;
}
@media screen and (max-device-width: 950px){
    width: 100% ;
    align-items: center;
    padding-bottom: 20px ;

}
  button {
    font-size: 25px;
    background-color: #ffe81f;
    cursor: pointer;
    border-radius: 5px;
    width: 70%;
    height: 35px;
    :active {
      width: 69%;
      height: 34px;
    }
  }
`;