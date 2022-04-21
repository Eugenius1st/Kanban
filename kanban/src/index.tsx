import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@500&family=Bebas+Neue&family=Black+Han+Sans&family=Do+Hyeon&family=Source+Sans+Pro:wght@300;400&family=Ubuntu+Mono:ital@1&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul, li {
  list-style: none;

}
button{
  border: none;
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color :black;
}
a{
  text-decoration: none;
  color:inherit;
}
  `;

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
