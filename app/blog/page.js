import React from 'react'
import Header from '../(components)/PagesHeader/Header'
import BlogPics from '../(components)/Image/BlogPics'
import Lonely from "../assets/images/libary.png"
import Heading from "../(components)/Heading/Heading"
import Image from 'next/image'


export default function Contact() {
  return (
    <div>
      <Header title="Blog"/>
      <div className="container thisClass">
          <div className="row">
            <div className="col-6">
              <Image src={Lonely} height={350} width={500} />
            </div>
            <div className="col-6">
              <Heading title="We Have Multipule Campus" button="Explore More" />
            </div>
          </div>
        </div>
      <div className="container thisClass">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='my-2 text-success fw-bold'>Our Campus</h1>
            <p className='fw-bold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem error, impedit commodi.</p>
          </div>
        </div>
       <BlogPics heading1="Our Main Campus" heading2="Our Secondary Campus" heading3="Our Courses Campus"/>
      </div>
    </div>
  )
}
