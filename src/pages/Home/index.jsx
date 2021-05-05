import React from "react";
import { ContainerHome, ContainerButton } from "./styles";
import blackLogoImg from "../../assets/mettzer.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <ContainerHome>
        <img src={blackLogoImg} alt="Logo da empresa" />
      </ContainerHome>

      <ContainerButton>
        <Link to="/searchpage">Acessar plataforma</Link>
      </ContainerButton>
    </>
  );
};

export default HomePage;
