import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header>
        <Navbar/>
        <div className="container" style={{marginTop:"15vh"}}>
          <div className="row">
            <div className="col-4 text-light ms-5">
              <h1 className='fw-bold'>Creative Digital Agency</h1>
              <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel consequatur.</p>
              <button className='text-light rounded-pill border-0 px-4 py-2' style={{backgroundColor:"#0077b6"}}>Learn More</button>
            </div>
          </div>
        </div>
    </header>
  )
}
