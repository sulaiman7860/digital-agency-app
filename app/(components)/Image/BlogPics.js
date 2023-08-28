import Image from 'next/image'
import campus1 from "../../assets/images/Campus1.png"
import campus2 from "../../assets/images/Campus2.png"
import campus3 from "../../assets/images/Campus3.png"
import "./blogpics.css"

export default function BlogPics(props) {
  return (
    <div className="row">
        <div className="col-4">
        <div className='container fieldSet'>
    <Image className='rounded my-3' width={320} height={320} src={campus1} />
     <p className='pTags'>March 10,2015</p>
     <h3 className='heading3'>{props.heading1}</h3>
     <p className='pTags'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at veniam iste quas, dolorem neque minus architecto eaque.</p>
    </div>
    </div>
    <div className="col-4">
        <div className='container fieldSet'>
    <Image className='rounded my-3' width={320} height={320} src={campus2} />
     <p className='pTags'>March 10,2015</p>
     <h3 className='heading3'>{props.heading2}</h3>
     <p className='pTags'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at veniam iste quas, dolorem neque minus architecto eaque.</p>
    </div>
    </div>
    <div className="col-4">
        <div className='container fieldSet'>
    <Image className='rounded my-3' width={320} height={320} src={campus3} />
     <p className='pTags'>March 10,2015</p>
     <h3 className='heading3'>{props.heading3}</h3>
     <p className='pTags'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at veniam iste quas, dolorem neque minus architecto eaque.</p>
    </div>
    </div>
    </div>
  )
}
