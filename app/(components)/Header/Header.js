import React from 'react'
import Navbar from './Navbar'
import Heading from '../Heading/Heading'

export default function Header() {
  return (
    <header>
        <Navbar/>
        <div className="container" style={{marginTop:"10vh"}}>
          <div className="row">
            <div className="col-5 text-light">
            <Heading title="Creative Digital Agency" button="Learn More"/>
            </div>
          </div>
        </div>
    </header>
  )
}
