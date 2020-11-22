/**
 * Page
 * =============
 *
 * Renders a single page containing the similar examples
 *
 * @author Nik Sumikawa
 * @date Nov 22, 2020
 */


import React, {useState} from 'react'

import { Grid, Segment } from "semantic-ui-react"

import Example from '../Example'
import Menu from './Menu'

export default function Page( props ){

  const [category, setCategory] = useState()


  var categories = [...new Set(props.config.map(row => row['page'] ))]

  // set the local state when a category is not previously defined
  if( category === undefined ){
    setCategory( categories[0] )
  }

  // select all examples to render on a single page
  var page = props.config.filter(r => r.page === category)

  var pageContent = []
  for( var i=0; i < page.length; i++ ){
    pageContent.push(
      <Example
        key = {`example-${i}`}
        info = {page[i]} />
    )
  }


  return(
    <Grid>
      <Grid.Column width={4}>
        <Menu
          category={category}
          setCategory={setCategory}
          categories={categories}
          />

      </Grid.Column>
      <Grid.Column stretched width={12}>
        <Segment>
          {pageContent}
        </Segment>
      </Grid.Column>
    </Grid>
  )
}
