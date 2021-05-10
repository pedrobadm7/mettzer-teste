import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  list-style: none;
  padding: 35px;

  li + li {
    margin-left: 1rem;
  }
`;
