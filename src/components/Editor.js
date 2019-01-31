import React from 'react'

export default function Editor(props) {
  return (
    <div className="form-group">
  <label htmlfor="editorInput">Editor</label>
  <textarea className="form-control rounded-0" id="editor" rows="10" onChange={(e) => {props.inputHandler(e)}}></textarea>
</div>
  )
}