import styled from "styled-components";

export const CardProduto = styled.div`
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  :hover{
    border-radius: 15px;
    box-shadow: 1px 1px 3px 3px gray;
  }
  @media screen and (max-device-width: 599px){
     flex-direction: row;
     width: 450px;
     height: 280px;
}
@media screen and (max-device-width: 449px){
     width: 380px;
}
`;
export const ImagemProduto = styled.img`
  border-bottom: 0.5px solid gray;
  height: 60%;
  width: 93%;
  padding: 5px;
  align-self: center;
  @media screen and (max-device-width: 599px){
     height: 70%;
     width: 50%;
     border-right: 0.5px solid gray ;
     border-bottom: 0px solid gray ;
}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  gap: 15px;
  justify-content: center;
  font-size: 22px;
  @media screen and (max-device-width: 599px){
     gap: 25px;
     padding-left: 15px;
}
  div {
    display: flex;
    justify-content: center;
    button {
      color: black;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      height: 40px;
      font-size: 23px;
      background-color: #ffe81f;
      border-radius: 5px;
      border: 1.5px solid black;
      :active {
        width: 59%;
        height: 39px;
      }
      @media screen and (max-device-width: 599px){
     width: 150px;
}
    }
  }
`;
export const Botao = styled.img`
    width: 25px;
    height: 25px;
`;