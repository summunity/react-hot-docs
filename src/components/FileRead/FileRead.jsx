
import React, {useState} from 'react'
import JsxParser from 'react-jsx-parser'
import txt2 from './file.jse';
import {jsx as _jsx} from 'react/jsx-runtime';

// import SemanticUI from 'semantic-ui-react'
// import TestFunction from './test'

import Sandbox from '../ReactSourceRender/Example'
// import txt from './file.txt'; // Adding `!!` to a request will disable all l

export default function FileRead() {

  const [textState, setTextState] = useState()
  const [element, setElement] = useState()
  var exampleText

  if( textState === undefined ){
    fetch(txt2)
    .then((r) => r.text())
    .then(text  => {
      console.log('this is the code', text);
      setTextState(text)

      const babelParser = require('@babel/parser')
      const ast = babelParser.parse(
        text,
        {
          sourceType:'module',
          plugins:['jsx'],
        }
      )

      console.log( ast )
      if( ast !== undefined ){

        const tempjson = JSON.parse( JSON.stringify(ast) )
        // console.log('does this get set??')
        // console.log( JSON.stringify(ast) )
        // console.log( tempjson)
        // setElement( _jsx(tempjson) )

      }
      // setElement( React.createElement( text ) )
    })



    const { default: generate } = require("@babel/generator");
    console.log(generate(textState).code);

  }

  const code = (<div>test1111</div>)
  // console.log( <code>{code}</code> )
  // // const txt = require('./file.txt');
  // // console.log( txt )
  // console.log( 'oh snap does this work??')
  // console.log( element)
  // console.log(txt2)
  // console.log(textState)
  // console.log(<JsxParser
  //   components={{ React }}
  //   jsx={textState}
  // />)


  const TestFunction = require( './test.jsx' ).default

  // <JsxParser
  //   components={{ React, TestFunction }}
  //   jsx={textState}
  //   />
  //
  // <code>{code}</code>
  return (

    <div>
      <h4>reading a file</h4>
      <p style={{whiteSpace:'pre'}}>
        {textState}
      </p>

      <br/>
      <h4>
        this should be the parser
      </h4>
      <Sandbox  />

    </div>

  );
}


// <JsxParser
//   components={{ React, TestFunction }}
//   jsx={textState}
//   />
//

// <TestFunction/>
// <Button primary> this is just an example </Button>
