import React from 'react'
import Header from '../(components)/PagesHeader/Header'
import Card from '../(components)/Card/Card'
import Images from '../(components)/Image/Images'

export default function Contact() {
  return (
    <div>
      <Header title="Portfolio" />
      <div className="container thisClass">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='fw-bold' style={{ color: "#06d6a0" }}>Course We Can Offer</h1>
            <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-4">
            <Card title="Undergraduate Programs"/>
          </div>
          <div className="col-4">
            <Card title="Graduate Programs"/>
          </div>
          <div className="col-4">
            <Card title="Adult Learning"/> 
          </div>
        </div>
      </div>
      <div className="container thisClass">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='fw-bold' style={{ color: "#06d6a0" }}>Course We Can Offer</h1>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Images title1="Web Development" title2="Artificial Intelligent" title3="Data Science" 
          prag1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vel magni rerum."
          prag2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vel magni rerum."
          prag3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vel magni rerum."/>
        </div>
      </div>
    </div>
  )
}
