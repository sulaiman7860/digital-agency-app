import React from 'react'

export default function singleButton(props) {
  return (
    <button className='text-light rounded-pill border-0 px-4 py-2' style={{backgroundColor:"#0077b6"}}>{props.button}</button>
  )
}
