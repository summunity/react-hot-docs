import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'

import { babelConfig, resolver } from './renderConfig'

const renderedExampleStyle = {
  padding: '2rem',
}

const editorStyle = {
  padding: 0,
}

const errorStyle = {
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  margin: 0,
  whiteSpace: 'pre-wrap',
}

const getKebabExamplePath = _.memoize((examplePath) => _.kebabCase(examplePath))

const SourceRenderExample = (props) => {
  const {
    examplePath,
    hasCodeChanged,
    onCodeChange,
    onCodeFormat,
    onCodeReset,
    renderHtml,
    showCode,
    sourceCode,
    visible,
  } = props

    return (
      <div>
        <h3>
          source code render
          {sourceCode}
          {showCode}
        </h3>

      <SourceRender
        babelConfig={babelConfig}
        renderHtml={showCode && renderHtml}
        resolver={resolver}
        source={sourceCode}
        unstable_hot
      >
        <h4>hello</h4>
        {({ element, error, markup }) => (
          <div>
            <div>
              {element}
            </div>

            <br/>
            <hr/>

            <div>
              {sourceCode}
            </div>
          </div>

        )}
      </SourceRender>
    </div>
    )


}

// ExampleEditor.propTypes = {
//   examplePath: PropTypes.string.isRequired,
//   hasCodeChanged: PropTypes.bool.isRequired,
//   onCodeChange: PropTypes.func.isRequired,
//   onCodeFormat: PropTypes.func.isRequired,
//   onCodeReset: PropTypes.func.isRequired,
//   sourceCode: PropTypes.string.isRequired,
//   renderHtml: PropTypes.bool.isRequired,
//   showCode: PropTypes.bool.isRequired,
//   visible: PropTypes.bool.isRequired,
// }

export default React.memo(SourceRenderExample)
