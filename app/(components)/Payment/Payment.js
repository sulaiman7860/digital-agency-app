import Image from "next/image"
import bussiness from "../../assets/images/123456.jpg"
import "./payment.css"

export default function Payment(props) {
    return (
        <div className='cardBox col-12 col-md-4 text-center mt-5'>
           <div className="shadow-lg py-3">
           <h3 className='fw-bold'>{props.plan}</h3>
            <Image className="my-3 rounded-circle" src={bussiness} width={70}
                height={70} /> <br />
            <span className="h3">{props.price}</span><span className="fw-bold">/Month</span>
            <p className="mt-3">Graphic Design</p>
            <p>Web Design</p>
            <p>UI/UX</p>
            <p>HTML/CSS</p>
            <p>SEO Marketing</p>
            <p>Bussiness Analysis</p>
            <button className='fw-bold rounded-pill border-0 px-4 py-2 mt-3'>Start Now</button>
           </div>
        </div>
    )
}
