import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        @media only screen and (min-width:425px){
        font-size: 67.5%; 
        }
        @media only screen and (min-width:500px){
        font-size: 70.5%; 
        }
        @media only screen and (min-width:750px){
        font-size: 75.5%; 
        }
        @media only screen and (min-width:1000px){ 
        font-size: 77.5%; 
        }
        @media only screen and (min-width: 1200px) {
        font-size: 80.5%; 
        }
        @media only screen and (min-width: 1400px) {
            font-size: 82.5%; 
        }
        @media only screen and (min-width: 1650px) {
            font-size: 85.5%; 
        }
        @media only screen and (min-width: 1800px) {
            font-size: 100%; 
        }
    }

    body{
        padding-right:0!important;
        overflow:auto!important;
        &::-webkit-scrollbar {
            width: 0.8em;
            background-color:#b5b5b5;
            &:hover{
                transform: scaleX(1.2)
            }
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #b5b5b5;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #b17acc; 
            background-image: -webkit-linear-gradient(45deg,
                                              rgba(102,51,153,.2) 25%,
                                              transparent 25%,
                                              transparent 50%,
                                              rgba(102,51,153,.2) 50%,
                                              rgba(102,51,153,.2) 75%,
                                              transparent 75%,
                                              transparent)
        }
    }
    *, *::before, *::after {  
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin:0;
        padding:0;
        outline:none;
        font-family: 'Roboto', sans-serif;
    }
    
    button {
        padding: 0;
        cursor: pointer;
    }

`;

export default GlobalStyle;
