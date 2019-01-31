import React from 'react'

let marked = require('marked')
export default function Previewer(props) {

    const { markup} = props
  return (

    <div id="preview" dangerouslySetInnerHTML = {{__html:marked(markup)}}>
    
    </div>
  )
}
