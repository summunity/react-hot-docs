/**
 * @title Controls
 * @description Example Header and controls
 * @author Nik sumikawa
 * @date Nov 21, 2020
 */

import React from "react"

import {
  Grid,
  Header,
  Button
} from "semantic-ui-react"


export default function Controls( props ){

  // do not render the component when the visiblility flag
  // is set to false
  if( props.visible === false ) return null

  var title
  if( props.info.title !== undefined ) title = props.info.title


  return(
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as="h2">{title}</Header>
        </Grid.Column>


        <Grid.Column textAlign='right'>
          <Button
            onClick={() => props.onClick()}>
            Show code
          </Button>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  )

}
