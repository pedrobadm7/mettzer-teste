import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #000;
        color: #fff;
        font-family: sans-serif;
    }
    #root {
        margin: 0 auto;
        padding: 0;
    }
    button {
        cursor: pointer;
    }
`;
