import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

function createStylesLink(href: string): HTMLLinkElement {
  const stylesLink = document.createElement('link');
  stylesLink.rel = "stylesheet";
  stylesLink.type = "text/css";
  stylesLink.href = href;
  return stylesLink;
}

ReactDOM.render(
  <React.StrictMode>
    <App header="Datepicker in Calendar Body" />
  </React.StrictMode>,
  document.getElementById('root')
);

const shadowRoot = document.getElementById('shadow')?.attachShadow({ mode: 'closed'});

const styleRoot = document.createElement('div');
styleRoot.appendChild(createStylesLink('https://reactdatepicker.com/static/css/main.4458e474.chunk.css'));
styleRoot.appendChild(createStylesLink('/shadow-styles.css'));
shadowRoot?.appendChild(styleRoot);

const appRoot = document.createElement('div');
shadowRoot?.appendChild(appRoot);

ReactDOM.render(
  <React.StrictMode>
    <App header="Datepicker in Shadow Root" shadow />
  </React.StrictMode>,
  appRoot
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
