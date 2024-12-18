import React from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

function Contact() {
  
  return (
    <div>
      <header>
        <Header/>
       
      </header>
        
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center h-full py-20 mx-auto w-[90%]">
          <div className=" w-full text-center md:text-left md:w-1/2 flex flex-col gap-10  text ">
            <div>
              <h1 className="text-6xl font-title font-medium ">Get In Touch</h1>
            </div>
            <div>
              <p className=" lg:w-[70%] text-center md:text-left">
                Sit vulputate faucibus eget eget scelerisque faucibus malesuada
                nullam mollis ut montes, dui scelerisque ornare.
              </p>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-center  md:justify-normal items-center gap-3 md:gap-5  font-title">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#5c9735]"
                />
                <p className="text-lg tracking-wider		text-zinc-700">VISIT US</p>
              </div>
              <div>
                <p className="md:ml-8 font-bold">
                  123 Demo St, San Francisco, CA 45678, United States
                </p>
              </div>
            </div>

            <div>
              <div className="flex  flex-col md:flex-row items-center justify-center  md:justify-normal gap-3 md:gap-5 font-title">
                <FontAwesomeIcon icon={faPhone} className="text-[#5c9735]" />
                <p className="text-lg tracking-wider	text-zinc-700">CALL US</p>
              </div>
              <div>
                <p className="md:ml-8 font-bold">+1 123-456-7890</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center justify-center  md:justify-normal gap-3 md:gap-5 font-title ">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#5c9735]" />
                <p className="text-lg tracking-wider	text-zinc-700">EMAIL US</p>
              </div>
              <div>
                <p className="md:ml-8 font-bold ">mail@example.coms</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {" "}
            <div className="w-full flex flex-col gap-4 md:flex-row">
              <div className="mx-auto w-full  flex flex-col justify-center gap-2">
                <div className=" md:ml-20 lg:ml-40 mt-16">
                  <h1 className="text-3xl font-title">Drop us a line or two</h1>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-slate-900 w-[90%]  px-4  py-3 my-4"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border border-slate-900  w-[90%] px-4 py-3 my-4"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="border border-slate-900  w-[90%] px-4 py-3 my-4"
                    />
                    <input
                      type="text"
                      placeholder="Message"
                      className="border border-slate-900 w-[90%]  px-4 pb-20 pt-2 my-4"
                    />
                    <div>
                      <button className="border border-slate-900 bg-[#5c9735] text-white font-bold px-16 py-4">
                        SEND 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
