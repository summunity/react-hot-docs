/**
 * Menu
 * ==========
 *
 *  Vertical Menu with controls based on the different page types
 *
 * @author Nik Sumikawa
 * @date Nov 22, 2020
 */

import React, {useState} from 'react'

import { Menu as SuiMenu } from "semantic-ui-react"


export default function Menu( props ){

  // create an array of menu elements
  var menuArray = []
  for( var i=0; i < props.categories.length; i++ ){
    const cat = props.categories[i]
    menuArray.push(
      <SuiMenu.Item
        key={`ExampleComponent-${i}`}
        name= {cat}
        active={props.category === cat}
        onClick={() => props.setCategory(cat)}
      />
    )
  }


  return(
    <SuiMenu fluid vertical tabular>
      {menuArray}
    </SuiMenu>

  )
}
