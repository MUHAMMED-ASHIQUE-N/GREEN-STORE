import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Review from "../Components/Review";
import ProductCard from "../Components/ProductCard";
import { faBox, faHandHoldingHeart, faLock } from "@fortawesome/free-solid-svg-icons";
// Assets
import produtImageOne from "../assets/plants-ecommerce-product-featured-img-8-600x900.jpg";
import produtImageTwo from "../assets/plants-ecommerce-product-featured-img-5.jpg";
import produtImageThree from "../assets/plants-ecommerce-product-featured-img-14.jpg";
import produtImageFour from "../assets/plants-ecommerce-product-featured-img-16.jpg";
import produtImageFive from "../assets/plants-ecommerce-product-featured-img-4.jpg";
import produtImageSix from "../assets/plants-ecommerce-product-featured-img-7-600x900.jpg";
import reviewImageOne from "../assets/plants-store-testimonial-avatar-img.jpg";
import reviewImageTwo from "../assets/plants-store-testimonials-avatar-img-1.jpg";
import reviewImageThree from "../assets/plants-store-testimonials-avatar-img-2.jpg";
import storySectionImg from "../assets/plants-store-story-section-img.jpg";
import FeatureSection from "../Components/FeatureSection";


// feature section

function Home() {
  const products = [
    {id: 1,name: "Birdnest Japanese", type: "Air purifying", price: "$84.90", image: produtImageOne },
    {id: 2, name: "Hoya Obovatum",  type: "Indoor Plants",  price: "$64.00",  image: produtImageTwo },
    {id: 3, name: "Monstera Deliciosa", type: "Air purifying", price: "$224.90", image: produtImageThree},
    {id: 4, name: "Zz plants", type: "Herbs seeds", price: "$124.90", image: produtImageFour},
    {id: 5, name: "Bird of Paradise", type: "Ceramic pots", price: "$249.90", image: produtImageFive },
    {id: 6, name: "Calathea Beauty Star", type: "Herbs seeds", price: "$79.90", image: produtImageSix },
  ];
  return (
    <div className="box-border">
      <div className=" relative min-h-[450px] md:min-h-[500px] lg:min-h-[600px] xl:h-[96vh] bg-[url('./assets/hero-section-bg.jpg')] bg-left bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[#141a0f] opacity-50"></div>

        <nav className="relative z-10">
          <Header />
        </nav>

        <div className="relative z-1 text-center text-white lg:flex flex-col items-center  justify-center">
          <p className="tracking-wide mt-16 py-4 font-title">
            WELCOME TO THE GREENSTORE
          </p>
          <h1 className="text-4xl  mb-4 font-title tracking-wider leading-snug md:py-5 lg:text-6xl   xl:px-96 lg:leading-loose">
            Let’s Bring the Spring to Your Home
          </h1>
          <Link to="/plants"  >
          <button className=" font-button px-7 py-3 mb-4 bg-white text-black font-medium   hover:bg-gray-200">
            Shop Now
          </button></Link>
        </div>
      </div>
      {/* {product show} */}
      <section>
        <div className="mx-auto py-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-[90%] md:w-full lg:w-[80%]">
            <div className=" flex flex-col md:flex-row justify-between items-center py-5">
              <h1 className="py-8 font-title text-3xl text-center ">
                New Plants
              </h1>

          <Link to="/plants"> <button className=" px-6 py-2 bg-[#5c9735] text-white font-button">
                Shop Now
              </button></Link> 
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-20">
          <div className="w-full min-h-[70vh] lg:min-h-[35vh] relative flex flex-col lg:flex-row xl:h-auto lg:static">
            <div className="lg:w-1/2 w-full ">
              <img src={storySectionImg} alt="" className="h-full" />
            </div>
            <div className="lg:w-1/2  absolute lg:static bg-white bottom-0 md:bottom-20  ">
              <div className=" ml-5 md:ml-20 h-full lg:none w-[90%] md:w-[60%] flex flex-col justify-center gap-6 ">
                <p className="font-title">OUR STORY</p>
                <h1 className="text-4xl font-title font-medium ">
                  For People Who Love Plants
                </h1>
                <p className="text-gray-600">
                  Vivamus quam sociis tristique diam at donec nisl, hendrerit
                  leo nunc at velit lacinia porttitor a nulla tellus ultrices
                  varius aliquet sed in placerat.
                </p>
                <p className="text-gray-600">
                  Facilisis eu faucibus diam cursus pulvinar consectetur purus
                  sem felis, mauris consectetur nisl vitae gravida ultricies sem
                  condimentum aliquet ut sed gravida amet vitae euismod pulvinar
                  volutpat laoreet pharetra.
                </p>
                <button className=" float-left py-3 bg-[#5c9735] w-[30%] text-white font-button">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center pt-12 w-full">
          <div className=" mx-auto md:w-[90%] lg:w-[80%]">
            <div>
              <h1 className="text-4xl font-title pb-4">
                What Our Customers Say
              </h1>
              <hr className="mx-auto w-14  border-[#5c9735]" />
            </div>
            <div className="flex flex-col md:flex-row">
              <Review
                review="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
                reviewImg={reviewImageOne}
                reviewerName="Jennifer Lewis"
              />
              <Review
                review="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
                reviewImg={reviewImageTwo}
                reviewerName="Alicia Heart"
              />
              <Review
                review="Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit."
                reviewImg={reviewImageThree}
                reviewerName="Juan Carlos"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-10 ">
          <div className="relative min-h-[300px]   xl:h-[80vh] bg-[url('./assets/footer-background.jpg')] bg-left bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-[#141a0f] opacity-50 z-0"></div>

            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center gap-3 sm:gap-0 md:pb-8 px-4 lg:px-8 xl:px-16">
              <p className="tracking-wide mt-10 sm:mt-16 lg:mt-36 py-2 sm:py-3 font-title text-base sm:text-lg md:text-xl">
                Gift Card
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title tracking-wider leading-snug md:py-4 lg:py-5 xl:px-48 lg:leading-loose">
                Give the Gift of Greenery
              </h1>

              <p className="tracking-wide py-2 sm:py-4 font-title text-sm sm:text-base md:text-lg">
                Pretium tortor risus enim neque quis pellentesque maecenas proin
                odio eget arcu
              </p>

              <button className="font-button px-5 py-2  mb-4 sm:px-7 sm:py-3 bg-white text-black font-medium text-sm sm:text-base hover:bg-gray-200 transition-all">
                Purchase A Gift Card
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f4f6f3] py-10">
        <div className="flex flex-col md:flex-row mx-auto md:w-[80%] items-center justify-center gap-8">
          <FeatureSection
            icon={faLock}
            title="Secure Payment"
            description="Fast and safe transactions."
          />
          <FeatureSection
            icon={faBox}
            title="Quality Packaging"
            description="Ensure freshness upon delivery."
          />
          <FeatureSection
            icon={faHandHoldingHeart}
            title="Customer Care"
            description="24/7 dedicated support."
          />
        </div>
      </section>

      <section>
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default Home;
