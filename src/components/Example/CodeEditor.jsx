/**
 * @title Code Editor
 * @description Code Editor Framework
 * @author Nik sumikawa
 * @date Nov 21, 2020
 */

import React, { Component, Fragment } from "react"

import { Segment } from "semantic-ui-react"
import AceEditor from "react-ace"
// import Editor from "./Editor"


export default function CodeEditor( props ){

  // do not render the component when the visiblility flag
  // is set to false
  if( props.visible === false ){
    return(
      <Segment
        attached="bottom"
        style={{ padding: 0 }}
        />

      )
  }

  require("brace/mode/html")
  require("brace/mode/jsx")
  require("brace/mode/sh")
  require("brace/theme/github")

  return(
    <Segment
      attached="bottom"
      style={{ padding: 0 }}
      >

      <AceEditor
        editorProps={{ $blockScrolling: Infinity }}
        maxLines={Infinity}
        minLines={10}
        mode="jsx"
        name="jsx-editor"
        onChange={props.onChange}
        tabSize={2}
        theme="github"
        value={props.source}
        width="100%"
      />



    </Segment>
  )

}
