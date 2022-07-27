import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({theme}) => theme.font.fontFamily}, 'Arial', sans-serif;
    font-size: ${({theme}) => theme.font.fontSize};
    line-height: ${({theme}) => theme.font.lineHeight};
    font-weight: ${({theme}) => theme.font.fontWeight};
  }
`;
