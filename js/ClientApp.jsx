/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import App from './App'; 



const renderApp = () => { 
  render(<App />, document.getElementById('app'))
}
renderApp();


const i = (function (){
  if(module.hot){
    module.hot.accept('./App', () => { 
      renderApp();
    })
  }
})()



// if(module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;
//     render(NextApp)
//   })
// }