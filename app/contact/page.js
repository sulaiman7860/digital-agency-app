import React from 'react'
import Header from '../(components)/PagesHeader/Header'
import Input from '../(components)/Input/input'
import SingleButton from '../(components)/Button/SingleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <div>
      <Header title="Contact" />
      <div className="container thisClass">
        <div className="row">
          <div className="col-12">
            <section className="loacation">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
                height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" className='w-100'></iframe>
            </section>
          </div>
          <div className="container thisClass">
          <div className="row">
            <div className="col-12">
            <section className="contact-us">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div>
                <FontAwesomeIcon height={20} width={20} icon={faHome}/>
              <span>
                <h5>NH9 Road, ABC Building</h5>
                <p>Ghaziabad, Uttar Pradesh, IN</p>
              </span>
            </div>
            <div>
            <FontAwesomeIcon height={20} width={20} icon={faPhone}/>
              <span>
                <h5>+91 7445546525</h5>
                <p>Monday To Saturday, 9AM To 6PM</p>
              </span>
            </div>
            <div>
            <FontAwesomeIcon height={20} width={20} icon={faEnvelope}/>
              <span>
                <h5>xyz@email.com</h5>
                <p>Email Us Yor Query</p>
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form className=''>
              <Input type="text" place="Enter Name" />
              <Input type="email" place="Enter Email" />
              <Input type="text" place="Enter Subject"/>
              <textarea rows="4" className='w-100 form-control my-2' placeholder="Message" required></textarea>

              <SingleButton button="Send Message"/>
            </form>
          </div>
        </div>
      </section>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}
