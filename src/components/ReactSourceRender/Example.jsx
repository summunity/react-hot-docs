import { Grid, Header, Icon, Label, Message, Segment } from "semantic-ui-react"
import React, { Component, Fragment } from "react"
import SourceRender from "react-source-render"

import * as REACT from 'react'
import * as SUIR from 'semantic-ui-react'


import Editor from "./Editor"

const imports = {
  'react': REACT,
  'semantic-ui-react': SUIR,
}

const resolver = path => imports[path]

export default class Sandbox extends Component {
//   state = {
//     source: `import React from "react";
// import { Button } from "semantic-ui-react"
//
// const Example = () => <Button primary>Hello world!</Button>;
//
// export default Example
// `,
//   }
  constructor(props) {
    super(props);

    this.state = {
      source: props.source
    };

    console.log( 'these are the props', props)
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
        <Header as="h2">Live sandbox</Header>

        <SourceRender resolver={resolver} source={source}>
          <Segment
            basic
            attached="top"
            style={{
              background: "rgb(255, 255, 255)",
              boxShadow: "rgb(204, 204, 204) 0px 1px 2px",
            }}
          >
            <Grid columns={2} divided>
              <Grid.Column>
                <Label attached="top left" color="teal" size="tiny">
                  Preview
                </Label>

              </Grid.Column>
              <Grid.Column>
                <Label attached="top right" color="teal" size="tiny">
                  Rendered HTML
                </Label>


              </Grid.Column>
            </Grid>
          </Segment>


        </SourceRender>

        <Segment attached="bottom" style={{ padding: 0 }}>
          <Editor
            editorProps={{ $blockScrolling: Infinity }}
            maxLines={Infinity}
            minLines={10}
            mode="jsx"
            name="jsx-editor"
            onChange={this.handleSourceChange}
            tabSize={2}
            theme="github"
            value={source}
            width="100%"
          />

          <Label
            as="a"
            attached="bottom right"
            color="black"
            href="https://github.com/layershifter/react-source-render/blob/master/components/Sandbox.js"
            size="tiny"
            style={{ zIndex: 10 }}
            target="blank"
          >
            <Icon name="github" /> View source
          </Label>
        </Segment>
      </Fragment>
    )
  }
}
