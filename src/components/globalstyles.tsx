import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle<{ theme: any }>`
  html, body {
    margin: 0;

    font-family: 'Source Sans Pro', sans-serif;

    --scroll-behavior: smooth !important;
    scroll-behavior: smooth !important;

    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.text.primary};

    --scrollbarBG: ${({theme}) => theme.colors.background};
    --thumbBG: #90A4AE;

    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
  }


  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    font-weight: lighter;
    line-height: 2;
    letter-spacing: .05rem;
    color: #e6e9ed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`


export default GlobalStyle