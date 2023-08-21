import Image from "next/image"
import bussiness from "../../assets/images/123456.jpg"
import "./card.css"

export default function Card(props) {
  return (
    <div className="cardId text-center rounded py-3" >
       <div className="container">
       <Image className="mt-3 rounded-circle" src={bussiness} width={70}
      height={70}/>
      <h4 className="mt-2">{props.title}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores esse, quibusdam.</p>
       </div>
    </div>
  )
}
