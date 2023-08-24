import React from 'react'
import Header from '../(components)/PagesHeader/Header'
import Heading from '../(components)/Heading/Heading'
import Image from 'next/image'
import gruop from "../assets/images/about.png"

export default function About() {
  return (
    <div>
      <Header title="About" />
      <div className="container thisClass">
        <div className="row">
          <div className="col-6">
            <Heading h1="We 'er The World's One Of The Best Company" button="Read More" />
          </div>
          <div className="col-6">
            <Image height={350} src={gruop} />
          </div>
        </div>
      </div>
    </div>
  )
}
