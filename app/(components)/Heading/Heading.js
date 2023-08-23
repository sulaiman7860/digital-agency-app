import React from 'react'
import SingleButton from '../Button/SingleButton'

export default function Heading(props) {
  return (
    <div className="container">
      <div className="row">
            <div className="col-12">
                <h3  className="text-primary">{props.h3}</h3>
              <h1 className='fw-bold'>{props.title}</h1>
              <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse? Minima eius a eaque quam vitae temporibus voluptate, at ratione, nesciunt tenetur aliquam laborum ipsum rem labore.</p>
              <SingleButton button={props.button}/>
            </div>
          </div>
    </div>
  )
}
