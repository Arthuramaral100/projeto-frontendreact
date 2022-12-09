import styled from "styled-components";
import {mudaCorFundo} from "../header/headerStyled"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  min-height: 100vh;
  padding-bottom: 3vh;
  nav {
    background-color: ${mudaCorFundo};
    box-shadow: 0px 5px 5px 0px #ffe81f;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    div {
    color: white;
      width: 150px;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    input {
      font-size: 20px;
      height: 25px;
      width: 100%;
      color: black;
      border-radius: 5px;
      border: 0.5px solid gray;
    }
    select {
      border-radius: 5px;
      font-size: 20px;
      height: 25px;
      width: 150px;
    }
    @media screen and (max-device-width: 730px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
      padding: 15px 0 15px 10px;
}
  }
`;

export const Catalogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-left: 60px;
  align-self: center;
  @media screen and (max-device-width: 645px){
     padding-left: 10px;
}
  @media screen and (max-device-width: 949px){
    padding-left: 0px;
     justify-content: center;
}
`;

