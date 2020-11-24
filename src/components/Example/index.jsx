
import React, {useState} from 'react'

import { Segment } from "semantic-ui-react"

import CodeEditor from './CodeEditor'
import Controls from "./Controls"


import SourceRender from "react-source-render"

/**
 * Reads the text contents of the file in two steps. First the compiled
 * filename is imported and then the data is retrieved from the compiled
 * filename
 * @param       {string} props.filename file name including path. Note that the file must be of .jse extension
 * @constructor
 */
export default function Example( props ) {

  const [module, setModule] = React.useState()
  const [source, setSource] = useState()
  const [showCode, setShowCode] = useState(false)

  props.import(`${props.info.path}`)
    .then(module => setModule(module.default))
  // const txtFile = require('../doc/file.jse').default;
  //
  if( (module !== undefined)&(source === undefined) ){
    fetch(module)
    .then((r) => r.text())
    .then(text  => {
      // console.log('this is the code', text);
      setSource(text)
    })

  }

  if( source === undefined ) return null

  return (

    <Segment vertical>

      <Controls
        {...props}
        onClick={() => setShowCode(!showCode)}
        />

      <div style={{padding:'10px'}}>
        <SourceRender
          resolver={props.resolver}
          source={source}
          />
      </div>

      <CodeEditor
        source={source}
        visible={showCode}
        onChange={(val) => setSource(val)}
        />

    </Segment>

  );
}
// <Controls
//   {...props}
//   onClick={() => setShowCode(!showCode)}
//   />
//
