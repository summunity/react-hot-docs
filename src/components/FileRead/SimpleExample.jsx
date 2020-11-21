import React from 'react'

import {jsx as _jsx} from 'react/jsx-runtime';

import faker from 'faker'
import ReactDOM from 'react-dom'

import { babelConfig, resolver } from '../ExampleEditor/renderConfig'
import _ from 'lodash'
import PropTypes from 'prop-types'
import SourceRender from 'react-source-render'

import Sandbox from '../ReactSourceRender/Example'

export default function SimpleExample(props){

  const code = `<div>this is string code</div>`

  // const babelParser = require('@babel/parser')
  // const ast = babelParser.parse(
  //   code,
  //   {
  //     sourceType:'module',
  //     plugins:['jsx'],
  //   }
  // )


  // {ast}
  // console.log( ast )
  return(
    <div>
      <h3> Simple Example </h3>

      <br/><hr/>
      {code}
      <Sandbox
        sourceCode={code}
        />
      <br/><hr/>

    </div>
  )
}
