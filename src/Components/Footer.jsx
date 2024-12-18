import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div>
   
        <div className="bg-[#141a0f] text-white">
          <div className="flex flex-col  items-center justify-center py-16">
            <div className=" md:space-x-12 py-10 flex flex-col  md:flex-row gap-3 font-button">
              <Link to="/">Home</Link>
              <Link to="/plants">Plants</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-center font-title text-lg pt-8">Subscribe to our newsletter</h1>
              </div>
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="w-96">
                  <input
                    type="email"
                    placeholder="Your email address..."
                    className="w-full py-3 px-4"
                  />
                </div>
                <div>
                  <button className="bg-[#5c9735] py-2 px-10 font-button ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
                <div className=" space-x-6 pt-8 text-[#aaaca8]">
                  <FontAwesomeIcon icon={faInstagram} className=' hover:text-white'/>
                  <FontAwesomeIcon icon={faFacebook} className=' hover:text-white'/>
                  <FontAwesomeIcon icon={faTwitter} className=' hover:text-white'/>
                </div>
              </div>
          </div>
          <hr className="border-stone-700"/>
          <div className="py-20">
            <div><p className="text-center text-[#aaaca8]">© 2024 Plant Shop. Powered by Plant Shop.</p></div>
          </div>
        </div>

    </div>
  )
}

export default Footer