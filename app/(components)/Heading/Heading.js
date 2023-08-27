import SingleButton from '../Button/SingleButton'

export default function Heading(props) {
  return (
    <div className="container">
      <div className="row">
            <div className="col-12">
                <h1  className="fw-bold" style={{color:"#06d6a0"}}>{props.h1}</h1>
              <h1 className='fw-bold'>{props.title}</h1>
              <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse? Minima eius a eaque quam vitae temporibus voluptate, at ratione, nesciunt tenetur aliquam laborum ipsum rem labore.</p>
              <SingleButton button={props.button}/>
            </div>
          </div>
    </div>
  )
}
