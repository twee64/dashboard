import {createGlobalStyle} from 'styled-components';

export const lightTheme ={
  body: "hsl(0, 0%, 100%)",
  fontColor: "hsl(230, 17%, 14%)",
  headerBackground: "hsl(225, 100%, 98%)",
  cardBackground: "hsl(227, 47%, 96%)",
  secondaryFont: "hsl(228, 34%, 66%)"
};

export const darkTheme ={
  body: "hsl(230, 17%, 14%)",
  fontColor: "hsl(0, 0%, 100%)",
  headerBackground: " hsl(232, 19%, 15%)",
  cardBackground: "hsl(228, 28%, 20%)",
  secondaryFont: "hsl(228, 12%, 44%)"
};

export const GlobalStyles = createGlobalStyle `
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
  }
  .facebook{
    border-top: 3px solid hsl(208, 92%, 53%);

  }
  .header{
    background-color: ${props => props.theme.headerBackground};
  }
  .container-item{
    background-color: ${props => props.theme.cardBackground};
  }
  .overview-item{
    background-color: ${props => props.theme.cardBackground};
  }
  `