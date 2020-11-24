import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Component from './component.js'

import SourceRender from "react-source-render"


import * as REACT from 'react'
import * as SUIR from 'semantic-ui-react'
const imports = {
    'react': REACT,
    'semantic-ui-react': SUIR,
  }
  
const config = require('./config.json').examples

ReactDOM.render(
  <React.StrictMode>
    <Component
      path={'./App'}
      SourceRender={SourceRender}
      config={config}
      resolver = {(path) => imports[path]}
      import={(val) => import(`${val}`)}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
// class Dynamic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { module: null };
//   }
//   componentDidMount() {
//     const { path } = this.props;
//     import(`${path}`)
//       .then(module => this.setState({ module: module.default }))
//   }
//   render() {
//     const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//     return(
//       <div>
//         {Component && <Component />}
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Dynamic path='./component' />, document.getElementById('root'));
