import React from 'react'

export default function Editor(props) {
  return (
    <div className="Editor">
      <h2 className="Editor__title text-capitalize">editor</h2>
      <div className="Editor__form">
      <div className="form-group">
  <textarea className="form-control rounded-0" id="editor" rows="10" onChange={(e) => {props.inputHandler(e)}}></textarea>
   </div>
      </div>
    </div>
   
  )
}