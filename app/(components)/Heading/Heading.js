import React from 'react'

export default function Heading(props) {
  return (
    <div className="container">
      <div className="row">
            <div className="col-12">
                <h3  className="text-primary">{props.h3}</h3>
              <h1 className='fw-bold'>{props.title}</h1>
              <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse? Minima eius a eaque quam vitae temporibus voluptate, at ratione, nesciunt tenetur aliquam laborum ipsum rem labore.</p>
              <button className='text-light rounded-pill border-0 px-4 py-2' style={{backgroundColor:"#0077b6"}}>{props.button}</button>
            </div>
          </div>
    </div>
  )
}
