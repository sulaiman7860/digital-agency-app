import Navbar from '@/app/(components)/Header/Navbar'

export default function Header(props) {
  return (
    <div id='headerId'>
        <Navbar/>
        <div className="container" style={{marginTop:"10vh"}}>
          <div className="row">
            <div className="col-4 offset-5 text-light">
              <h1 className='fw-bold'>{props.title}</h1>
            </div>
          </div>
        </div>
    </div>
  )
}
