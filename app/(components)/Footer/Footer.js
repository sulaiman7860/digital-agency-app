import Link from "next/link"
import "./footer.css"
import FooterCol from "../FooterCol/FooterCol"

export default function Footer() {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-4 offset-1">
                        <h1 className='text-primary fw-bold'>LOGO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ad dignissimos molestiae molestias rem tenetur quos fugit, explicabo voluptatum fuga reprehenderit numquam quod maiores optio alias quasi neque adipisci obcaecati.</p>
                        <button className="btn btn-outline-primary rounded-circle">&nbsp;</button>
                        <button className="btn btn-outline-primary rounded-circle mx-2">&nbsp;</button>
                        <button className="btn btn-outline-primary rounded-circle">&nbsp;</button>
                    </div>
                    <div className="col-2">
                        <h3 className="mb-3">Our Links</h3>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="my-1">
                                <Link className=" active " href="/">Home</Link>
                            </li>
                            <li className="my-1">
                                <Link className=" active" href="/about">About</Link>
                            </li>
                            
                            <li className="my-1">
                                <Link className=" active" href="/services" >
                                    Services
                                </Link>
                            </li>
                            <li className="my-1">
                                <Link className=" active" href="/contact" >
                                    Team
                                </Link>
                            </li>
                            
                            <li className="my-1">
                                <Link className=" active" href="/blog" >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <FooterCol title="Our Company" link1="About Company" link2="Our Testimonials" link3="Latest News" link4="Our Mission" link5="Get Free Quote"/>
                    <FooterCol title="Our Services" link1="App Development" link2="Web Development" link3="Graphic Design" link4="Web Solution" link5="App Design"/>
                </div>
            </div>
        </footer>
    )
}
