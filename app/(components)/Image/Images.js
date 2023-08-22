import React from 'react'
import Image from 'next/image'
import pixel1 from "../../assets/images/666743.jpg"
import pixel2 from "../../assets/images/666744.jpg"
import pixel3 from "../../assets/images/666745.jpg"

export default function Images(props) {
  return (
    <div className='mb-3'>
      <div className="row">
      <div className="col-4 text-center ">
      <Image src={pixel1} height={350} width={350}/>
      <h5 className='fw-bold my-2'>{props.title1}</h5>
      <p className='text-secondary'>{props.prag1}</p>
      </div>
      <div className="col-4 text-center">
      <Image src={pixel2} height={350} width={350}/>
      <h5 className='fw-bold my-2'>{props.title2}</h5>
      <p className='text-secondary'>{props.prag2}</p>
      </div>
      <div className="col-4 text-center">
      <Image src={pixel3} height={350} width={350}/>
      <h5 className='fw-bold my-2'>{props.title3}</h5>
      <p className='text-secondary'>{props.prag3}</p>
      </div>
      </div>
      </div>
  )
}
