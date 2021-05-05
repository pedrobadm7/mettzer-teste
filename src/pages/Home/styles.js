import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  background-color: #000;
  width: 100%;

  img {
    height: 50%;
    width: 50%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;

  background: black;
  a {
    background-color: #4ebbcb;
    width: 200px;
    height: 50px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    position: relative;
    bottom: 40px;

    transition: 0.5s;

    &:hover {
      background-color: white;
      color: #4ebbcb;
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 720px) {
    a {
      position: relative;
      top: 100px;
    }
  }
`;

