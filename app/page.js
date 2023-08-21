import Card from "./(components)/Card/Card"
import Header from "./(components)/Header/Header"
import Image from "next/image"
import Lonely from "./assets/images/5555732.jpg"
import Heading from "./(components)/Heading/Heading"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container thisClass">
      <div className="row" style={{marginTop:"15vh"}}>
        <div className="col-12">
          <h4 className="text-center fw-bold text-primary" >Our Services</h4>
        </div>
        <div className="col-8 offset-1">
        <h1 className="mt-2 text-end">We Are Providing Digital Services</h1>
        </div>
         <div className="col-2 offset-1">
         <span className=""> <button className="me-3 btn btn-outline-primary rounded-circle">&lt;</button>
         <button className="btn btn-outline-primary rounded-circle">&gt;</button></span>

         </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <Card title="Web Development"/>
        </div>
        <div className="col-4">
          <Card title="Graphic Design"/>
        </div>
        <div className="col-4">
          <Card title="Digital Marketing"/>
        </div>
      </div>
    </div>

   {/* -------------------------------------------------------------------------------------------------------------------------- */}

   <div className="container thisClass">
    <div className="row">
    <div className="col-6">
      <Image src={Lonely} height={350} width={450}/>
    </div>
    <div className="col-6">
          <Heading h3="About Us" title="We Design,Build Brands & Digital Products" button="Read More"/>
    </div>
    </div>
   </div>


   {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
   
   <div className="container-fluid thisClass">
<div className="row">
  <div className="col-10 offset-1 p-5">
  <div className="row py-5 border border-light">
        <div className="col-4">
          <Card title="Smart Planing"/>
        </div>
        <div className="col-4">
          <Card title="Our Partnership"/>
        </div>
        <div className="col-4">
          <Card title="Super Ideas"/>
        </div>
      </div>
  </div>
</div>

   </div>
   {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
   
   <div className="container thisClass">


   </div>
   
    </>
  )
}

