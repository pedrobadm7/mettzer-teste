import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  padding: 35px;

  :active {
    background: none;
    font-weight: bold;
  }

  li + li {
    margin-left: 1rem;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #4ebbcb;

  :hover {
    opacity: 0.8;
  }

  #clicked:active {
    background: none;
    font-weight: bold;
  }
`;
