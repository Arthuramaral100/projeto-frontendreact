import styled from "styled-components";

export function mudaCorFundo(props) {
  if (props.categ === "Rebeldes") {
    return "#e36230";
  } else if (props.categ === "Jedi") {
    return "#f1edec";
  } else if (props.categ === "Sith") {
    return "#a3090d";
  } else {
    return "black";
  }
}

function mudaCorLetra(props) {
  if (props.categ === "Rebeldes") {
    return "white";
  } else if (props.categ === "Jedi") {
    return "#3363a7";
  } else if (props.categ === "Sith") {
    return "black";
  } else {
    return "#ffe81f";
  }
}

export const MainHeader = styled.header`
  min-height: 17vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${mudaCorFundo};
 
  @media screen and (max-device-width: 1000px){
    flex-direction: column;
    gap: 15px;
}

`;
export const Name = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 45px;
  color: ${mudaCorLetra};
  font-family: "StarWars";
  h1 {
    padding-left: 20px;
    cursor: pointer;
    
  }
  img {
    background-color: white;
    border: 8px solid black;
    border-radius: 100%;
    width: 110px;
    height: 110px;
  }
  @media screen and (max-device-width: 1000px){
    width: 100%;
    justify-content: space-around;
}
@media screen and (max-device-width: 599px){
    flex-direction: column;
}

`;

export const Search = styled.div`
  padding-right: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 40%;
  select{
    height: 45px ;
    border-radius: 5px 0 0 5px;
    border: 1px solid white;
      font-size: 18px;
    width: 110px;
    padding-left: 5px;
  }
  input {
    padding-left: 10px;
    height: 45px;
    width: 500px;
    font-size: 20px;
    border: 1px solid white;
    border-left: 0.5px solid gray;
  }
  @media screen and (max-device-width: 1000px){
      width: 80%;
      padding-bottom: 10px;
}
`;

export const BotaoCarrinho = styled.button`
    cursor: pointer;
    width: 65px;
    height: 45px;
    border: 1px solid white;
    border-radius: 0 5px 5px 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 3px;
    :active {
      width: 64px;
      height: 44px;
    }
    @media screen and (max-device-width: 730px){
      width: 60px;
      height: 45px;
}
`

export const ImagemCarrinho = styled.img`
  width: 33px;
  height: 33px;
  cursor: pointer;
  @media screen and (max-device-width: 730px){
      width: 30px;
      height: 30px;
}
`;


