import React from 'react'
import Image from 'next/image'
import pixel1 from "../../assets/images/666743.jpg"
import pixel2 from "../../assets/images/666744.jpg"
import pixel3 from "../../assets/images/666745.jpg"

export default function Images(props) {
  return (
    <div className='mb-3'>
      <div className="row">
      <div className="col-4">
      <Image src={pixel1} height={350} width={350}/>
      </div>
      <div className="col-4">
      <Image src={pixel2} height={350} width={350}/>
      </div>
      <div className="col-4">
      <Image src={pixel3} height={350} width={350}/>
      </div>
      </div>
      </div>
  )
}
