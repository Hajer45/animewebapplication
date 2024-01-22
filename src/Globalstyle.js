import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto,sans-serif;
  }
  body {
    margin:0;
    padding:0;
  }
`;
const FontLink = () => (
  <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
  </Helmet>
);


export { GlobalStyle, FontLink };
