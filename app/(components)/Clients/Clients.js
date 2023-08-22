import React from 'react'
import Image from 'next/image'
import bussiness from "../../assets/images/123456.jpg"
import "./clients.css"

export default function Clients(props) {
  return (
      <div className='col-6 text-center'>
        <div className="container  clients rounded">
         <Image className="my-3 rounded-circle" src={bussiness} width={70}
      height={70}/>
      <h4>{props.client}</h4>
      <h5>{props.word}</h5>
      <p>There are so many website i have visited but this one is better than all.
        My experience has been amazing in this website.Team is efficent and work hard when ever I have a problem it is immediatly solved.
        In short this is the best one can get.</p>
         </div>
    </div>
  )
}
