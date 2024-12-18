import React from "react";
import Header from "../Components/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

//assets

import overlayImage from "../assets/youtube-video-overlay-image.jpg";
import ownerImage from "../assets/site-owner-img.jpg"
import storeGalleryImgOne from "../assets/plants-store-gallery-img-1.jpg"
import storeGalleryImgTwo from "../assets/plants-store-gallery-img-2.jpg"
import storeGalleryImgThree from "../assets/plants-store-gallery-img-3.jpg"
import storeGalleryImgFour from "../assets/plants-store-gallery-img-4.jpg"
import storeGalleryImgFive from "../assets/plants-store-gallery-img-5.jpg"
import storeGalleryImgSix from "../assets/plants-store-gallery-img-6.jpg"
import Footer from "../Components/Footer";
function About() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };
  return (
    <>
      <nav>
        <Header />
      </nav>
      <div className="mx-auto w-[90%] xl:w-[80%]">
        <section>
          <div>
            <div className=" mt-4 xl:mt-20 flex flex-col md:flex-row py-4 ">
              <div className="md:w-1/3">
                <h1 className="font-title text-4xl md:text-5xl xl:text-6xl">
                  About
                </h1>
              </div>
              <div className="md:w-2/3 mt-8">
                <div>
                  <hr className="w-16 border-[#5c9735]" />
                </div>
                <div>
                  <h1 className="py-4 text-2xl font-title">
                    We provide fresh and healthy plants for your space
                  </h1>
                  <p className="xl:w-[80%] font-button text-stone-500">
                    Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat
                    sit mauris semper platea urna, sapien fermentum venenatis
                    etiam enim ullamcorper phasellus tortor justo sapien
                    faucibus in adipiscing risus adipiscing bibendum nec eget
                    tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-24 lg:py-28 xl:py-10">
            <div className="relative py-10 md:py-28 lg:py-40 w-full  xl:min-h-[90vh]">
              <iframe
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                frameborder="0"
                allowFullScreen
                allow=""
                className="absolute top-0 left-0 w-full h-full "
              ></iframe>
              {showOverlay && (
                <div
                  className="absolute top-0 left-0 w-full h-full bg-white  flex items-center justify-center"
                  onClick={handleOverlayClick}
                >
                  <img src={overlayImage} alt="Overlay" className="" />
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row pb-20">
            <div className="md:w-1/3">
              <p className="font-title tracking-widest		">OUR STORY</p>
            </div>
            <div className=" md:w-2/3 flex flex-col gap-6 font-button text-stone-700">
              
              <p className="leading-7">
                Tristique dapibus porta viverra sit accumsan integer semper
                dolor etiam id iaculis feugiat egestas urna est magna euismod
                donec facilisis sed integer orci ac.
              </p>
            <p className="leading-7">
              Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat
              sit mauris semper platea urna, sapien fermentum venenatis etiam
              enim ullamcorper phasellus tortor justo, et, pellentesque
              pellentesque sapien faucibus in adipiscing risus adipiscing
              bibendum in nec eget tincidunt in in sed magna arcu molestie nec
              mauris quisque.
            </p>
            <p className="leading-7">
              Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae
              in volutpat faucibus elementum, sodales orci mi fames molestie
              venenatis nunc hendrerit
            </p>
            <div className="">
              <FontAwesomeIcon icon={faQuoteLeft} className="flex-none text-3xl text-[#c6d8c0]"/>
              <h1 className="font-bold font-button text-lg py-4 text-black">
                Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
                tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in
                nec ullamcorper vel.
              </h1>
              <div className="flex items-center gap-4 font-button">
                <img src={ownerImage} alt="" className="rounded-full" />
                <div className="tracking-wider text-stone-700">
                  <h1>Emily Evergreen</h1> <p className="text-[12px]">Founder, Owner</p>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>
        <section>
          <div className="py-20">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
             <img src={storeGalleryImgFive} alt="" />
             <img src={storeGalleryImgSix} alt="" />
             <img src={storeGalleryImgThree} alt="" />
             <img src={storeGalleryImgFour} alt="" />
             <img src={storeGalleryImgTwo} alt="" />
             <img src={storeGalleryImgOne} alt="" />
            </div>
          </div>
        </section>
       
      </div>
      <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default About;
