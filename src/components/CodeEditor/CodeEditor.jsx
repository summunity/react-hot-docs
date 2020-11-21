import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import Ace from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/theme/tomorrow_night_eighties'



class CodeEditor extends React.Component {
  editorRef = React.createRef()
  name = `docs-editor-${_.uniqueId()}`

  componentDidMount() {
    this.setCursorVisibility(this.props.showCursor)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showCursor !== this.props.showCursor) {
      this.setCursorVisibility(this.props.showCursor)
    }

    // focus editor when editor it becomes active
    if (prevProps.active !== this.props.active && this.props.active) {
      this.editorRef.current.editor.focus()
    }
  }

  handleChange = _.debounce((value, e) => {
    _.invoke(this.props, 'onChange', value, e)
  }, 300)

  setCursorVisibility = (visible) => {
    const cursor = this.editorRef.current.editor.renderer.$cursorLayer.element

    cursor.style.display = visible ? '' : 'none'
  }

  render() {
    return (
      <Ace
        editorProps={{ $blockScrolling: Infinity }}
        enableLiveAutocompletion
        height='100px'
        highlightActiveLine
        highlightGutterLine
        name={this.name}
        maxLines={Infinity}
        mode='jsx'
        onChange={this.handleChange}
        readOnly={false}
        ref={this.editorRef}
        setOptions={{ fixedWidthGutter: true, showFoldWidgets: false }}
        showPrintMargin={false}
        tabSize={2}
        theme='tomorrow_night_eighties'
        width='100%'
        {...this.props}
      />
    )
  }
}
// enableBasicAutocompletion={[semanticUIReactCompleter]}

CodeEditor.propTypes = {
  active: PropTypes.bool,
  showCursor: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

CodeEditor.defaultProps = {
  active: true,
  showCursor: true,
}

export default CodeEditor
