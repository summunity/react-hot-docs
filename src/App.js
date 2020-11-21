
import React, { createElement } from 'react'

// import CodeEditor from './components/CodeEditor/CodeEditor'
import FileRead from './components/FileRead/FileRead'
import SimpleExample from './components/FileRead/SimpleExample'
// import Sandbox from './components/ReactSourceRender/Example'

import Example from './components/Example'

export default function App() {

  const config = require('./config.json')

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
      hello
      <Example
        path = {config.directory}
        info = {config.examples[0]}
        />

    </div>

  );
}


// <Example
//   jse = {'./components/doc/file.jse'}/>

// <CodeEditor
//   onChange={(value) => console.log( value )}
//   value={'hello'} />
