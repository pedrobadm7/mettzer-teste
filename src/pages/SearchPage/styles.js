import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchPageContainer = styled.div`
  background: #1b1e23;
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  img {
    width: 250px;
    height: 50px;
  }
`;

export const Navigation = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 15px;
`;

export const NavigationContainer = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  color: #fff;
  padding: 15px;
  text-align: center;
  margin-top: 10px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding-top: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  margin-left: 20px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    width: 100%;
    max-width: 120px;
    height: 50px;
    background: #4ebbcb;
    color: #fff;
    border: 0px;
    margin: 15px;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 10px;
    &:hover {
      background-color: white;
      color: #4ebbcb;
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
export const ContainerList = styled.div`
  width: 720px;
  margin-left: 20px;
  margin-top: 40px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #f0f0f5;

  h1 {
    text-align: center;
    padding-top: 40px;
    color: #010202;
    font-size: 30px;
  }
`;

export const ListArticles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  margin: 10px 20px;
  padding: 20px;
  border-radius: 15px;
  div:first-child {
    padding-bottom: 20px;
    h1 {
      font-size: 18px;
      color: #010202;
    }
    p {
      font-size: 14px;
      color: #010202;
      margin-top: 4px;
    }
  }
  section {
    margin-top: 10px;
    strong {
      font-size: 18px;
      color: #010202;
    }
    p {
      font-size: 14px;
      color: #010202;
      margin-top: 4px;
    }
    h2 {
      margin-top: 10px;
      color: #010202;
      font-size: 16px;
    }
    p:nth-of-type(2) {
      font-style: italic;
    }
  }
  button {
    border: none;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 10px;
  }
`;
