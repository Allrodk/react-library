import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: sans-serif;
}
label{
    font-size: 1em;
}
input{
    font-size: 1em;
    height: 2.5rem;
    width: 17rem;  
}
`;
