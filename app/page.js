import Card from "./(components)/Card/Card"
import Header from "./(components)/Header/Header"
import Image from "next/image"
import Lonely from "./assets/images/5555732.jpg"
import Heading from "./(components)/Heading/Heading"
import Images from "./(components)/Image/Images"
import Button from "./(components)/Button/Button"
import Payment from "./(components)/Payment/Payment"
import Clients from "./(components)/Clients/Clients"
import DetailsCard from "./(components)/DetailsCard/DetailsCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container thisClass">
          <div className="row" style={{ marginTop: "15vh" }}>
            <div className="col-12">
              <h4 className="text-center fw-bold text-primary" >Our Services</h4>
            </div>
            <div className="col-8 offset-1">
              <h1 className="mt-2 text-end">We Are Providing Digital Services</h1>
            </div>
            <div className="col-2 offset-1">
              <Button />

            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <Card title="Web Development" />
            </div>
            <div className="col-4">
              <Card title="Graphic Design" />
            </div>
            <div className="col-4">
              <Card title="Digital Marketing" />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------- */}

        <div className="container thisClass">
          <div className="row">
            <div className="col-6">
              <Image src={Lonely} height={350} width={450} />
            </div>
            <div className="col-6">
              <Heading h3="About Us" title="We Design,Build Brands & Digital Products" button="Read More" />
            </div>
          </div>
        </div>


        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="container-fluid thisClass">
          <div className="row">
            <div className="col-10 offset-1 p-5">
              <div className="row py-5 border border-light">
                <div className="col-4">
                  <Card title="Smart Planing" />
                </div>
                <div className="col-4">
                  <Card title="Our Partnership" />
                </div>
                <div className="col-4">
                  <Card title="Super Ideas" />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="container thisClass">
          <div className="row">
            <div className="col-12">
              <h4 className="text-primary fw-bold">OUR PORTFOLIO</h4>
              <h1 className="mb-3 fw-bold">Take A Look At Our Latest Work</h1>
            </div>
            <Images />
            <Images />
            <div className="col-12 text-center mt-4">
              <Button />
            </div>
          </div>

        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="container-fluid thisClass">
          <div className="row">
            <div className="col-12 text-center py-5">
              <h4 className="text-primary fw-bold">Our Team</h4>
              <h1 className="fw-bold py-3">Our Top Dedicated Proffessionals</h1>
              <Images title1="Duglas Walker" title2="Carolline Harrison" title3="Sofia Sompson"
                prag1="SHIFT STAFF" prag2="FOUNDER & MANAGER" prag3="WEB DESIGNER" />

            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}


        <div className="container thisClass">
          <div className="row">
            <div className="col-12">
              <h3 className="fw-bold text-primary">Our Pricing</h3>
            </div>
            <div className="col-9">
              <h1 className="mt-2">We Are Providing Digital Services</h1>
            </div>
            <div className="col-3 text-end mt-4">
              <span className="text-primary fw-bold">Monthly</span>
              <label class="switch mx-3">
                <input type="checkbox" />
                  <span class="slider round"></span>
              </label>
              <span className="fw-bold">Yearly</span>

            </div>
              <Payment plan="Basic Plans" price="$50"/>
              <Payment plan="Standard Plans" price="$99"/>
              <Payment plan="Premium Plans" price="$150"/>
          </div>
        </div>


        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="container-fluid thisClass py-5" >
        <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-light my-4">We 're Trusted By Clients</h1>
          </div>
            <Clients client="Min Watson" word="CONSULTANT"/>
            <Clients client="Edward Hunter" word="IT Specilist"/>
        </div>
        </div>
      </div>

      <div className="container thisClass">
        <div className="row">
          <div className="col-3">
            <h4 className="text-primary fw-bold">OUR BLOG</h4>
            <h1 className="blog mb-4">Latest News & Blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsa tenetur culpa ea inventore.</p>
            <div className="row">
              <div className="col-9">
              <input type="text" placeholder="Enter Your Email" className="w-100 border-primary ps-3 h-100"/>
              </div>
              <div className="col-3">
                <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
          <DetailsCard/>
          <DetailsCard/>
          <div className="col-1 d-flex align-items-center">
          <Button/>
          </div>
        </div>
      </div>
      
      </main>

    </>
  )
}

