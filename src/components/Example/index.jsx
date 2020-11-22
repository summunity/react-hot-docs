
import React, {useState} from 'react'

import { Segment } from "semantic-ui-react"


import ExampleEditor from './ExampleEditor'


/**
 * Reads the text contents of the file in two steps. First the compiled
 * filename is imported and then the data is retrieved from the compiled
 * filename
 * @param       {string} props.filename file name including path. Note that the file must be of .jse extension
 * @constructor
 */
export default function Example( props ) {

  const [textState, setTextState] = useState()
  const [element, setElement] = useState()
  //
  //
  // try{
  //   const dir = '../doc/'
  //   const file = 'file.jse'
  //   const full = 'doc/file.jse'
  //   var path_module = require('path');
  //   console.log( __filename )
  //   console.log( __dirname )
  //   console.log( '??', path_module.relative(__dirname, 'doc/file.jse') )
  //
  //   // const directory = [props.path] + '/' + [props.info.path]
  //   // const directory = [props.path] + '/' + [props.info.path]
  //   // console.log( dir + file )
  //   // console.log( path_module )
  //   console.log( require('doc/'+ [file]) )
  //   // console.log( require( 'doc/' + [file] ) )
  // }catch{console.log( 'failed')}
  //

  const txtFile = require('doc/file.jse').default;

  if( textState === undefined ){
    fetch(txtFile)
    .then((r) => r.text())
    .then(text  => {
      // console.log('this is the code', text);
      setTextState(text)
    })

  }

  // if( textState !== undefined ){
  //   const regesx = new RegExp( '[^:](\/\/.+)|(\/\*[\W\w\n\r]+?\*\/)' )
  //   // console.log( textState.match(regesx) )
  //   var docblockParser = require("docblock-parser")
  //
  //   var docstring = [
  //     '/**',
  //     ' * Some free text',
  //     ' *',
  //     ' * @public',
  //     ' * @extends',
  //     ' * SuperLongClassName',
  //     ' * @multiline-example',
  //     ' * E.g. for example code',
  //     ' *',
  //     ' *     var foo = bar;',
  //     ' *',
  //     ' * With description.',
  //     ' *',
  //     ' * @param {string} foo',
  //     ' * @param {number} bar',
  //     ' * @returns {boolean} Some desciption',
  //     ' */',
  //   ].join('\n');
  //
  //   // config.text and config.default is provided through the default config
  //   var result = docblockParser({
  //     tags: {
  //       public: docblockParser.booleanTag,
  //       extends: docblockParser.singleParameterTag,
  //       'multiline-example': docblockParser.multilineTilTag,
  //       param: docblockParser.multilineTilTag,
  //       returns: docblockParser.multilineTilTag,
  //     }
  //   }).parse(textState);
  //
  //
  //   console.log(result)
  // }
  // console.log( textState)

  return (

    <Segment vertical>
      <ExampleEditor
        {...props}
        source={textState}
        />

    </Segment>

  );
}
