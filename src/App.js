
import React, { createElement } from 'react'


import Page from './components/Page'


export default function App() {

  const config = require('./config.json').examples

  console.log('this is the config', config)

  var path_module = require('path');
  console.log( 'depth', path_module.resolve(__dirname, 'bin') )

  // // const sourceCode = (<div> this is a work in progress</div>)
  // const sourceCode = require('./components/example.js').default
  // console.log( 'source code', createElement(sourceCode) )
  // {sourceCode}
  // <ExampleEditor />
  // <FileRead />
  return (
    <div>
      <Page config={config} />


    </div>

  );
}


// <Example
//   jse = {'./components/doc/file.jse'}/>

// <CodeEditor
//   onChange={(value) => console.log( value )}
//   value={'hello'} />
