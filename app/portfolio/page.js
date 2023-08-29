import "./portfolio.css"
import Header from '../(components)/PagesHeader/Header'
import StylishButton from "../(components)/Button/StylishButton"


export default function Portfolio() {
  return (
    <div>
      <Header title="Portfolio"/>
      <div className="container-fluid" >
        <div className="row" id='portfolio'>
          <div className="col-4 offset-4" id='portfolioCard'>
            <h1 className="fw-bold">This Is Our Porfolio</h1>
            <p className="fw-bold">We Provide Multipule Sevices Which Includes:
            <ol>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Artifical Intelligence</li>
              <li>Cyber Security</li>
              </ol>
              </p>
             <span className="styleButton text-center">
             <StylishButton button="Learn More"/>
             </span>
          </div>
        </div>


      </div>
    </div>
  )
}


