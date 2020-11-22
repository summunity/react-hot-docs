import { Grid, Header, Icon, Label, Message, Segment } from "semantic-ui-react"
import React, { Component, Fragment } from "react"
import SourceRender from "react-source-render"

import * as REACT from 'react'
import * as SUIR from 'semantic-ui-react'

import CodeEditor from './CodeEditor'
import Controls from "./Controls"

const imports = {
  'react': REACT,
  'semantic-ui-react': SUIR,
}

const resolver = path => imports[path]

export default class ExampleEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      source: props.source,
      showCode: false,
    };


    if( this.state.source === undefined ){
      this.state.source = `import React from "react";
      import { Button } from "semantic-ui-react"

      const Example = () => <Button primary>Hello world!</Button>;

      export default Example
      `
    }
  }

  // When there is a change in parameter selection, retreive
  // the data from the database
  shouldComponentUpdate(nextProps, nextState){

    if( nextProps.source !== this.props.source ){
      this.setState({source: nextProps.source})
    }

    return true
  }

  handleSourceChange = source => {
    this.setState({ source })
  }

  render() {
    const { source } = this.state

    return (
      <Fragment>


        <Controls
          {...this.props}
          onClick={() => this.setState({showCode: !this.state.showCode})}
          />

        <Segment vertical
          basic
          attached="top"

        >
        <SourceRender
          resolver={resolver}
          source={source}
          />

        </Segment>

        <CodeEditor
          source={source}
          visible={this.state.showCode}
          onChange={(val) => this.handleSourceChange(val)}
          />


      </Fragment>
    )
  }
}
