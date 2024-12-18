  import React, { useState } from "react";
  import Header from "../Components/Header";
  import ProductCard from "../Components/ProductCard";
  import Cart from "../Components/Cart";
  import Footer from "../Components/Footer";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faChevronDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

  // Assets
  import produtImageOne from "../assets/plants-ecommerce-product-featured-img-8-600x900.jpg";
  import produtImageTwo from "../assets/plants-ecommerce-product-featured-img-5.jpg";
  import produtImageThree from "../assets/plants-ecommerce-product-featured-img-14.jpg";
  import produtImageFour from "../assets/plants-ecommerce-product-featured-img-16.jpg";
  import produtImageFive from "../assets/plants-ecommerce-product-featured-img-4.jpg";
  import produtImageSix from "../assets/plants-ecommerce-product-featured-img-7-600x900.jpg";

  function Plants() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false); // To toggle cart visibility

    const products = [
      { id: 1, name: "Birdnest Japanese", type: "Air purifying", price: "$84.90", image: produtImageOne },
      { id: 2, name: "Hoya Obovatum", type: "Indoor Plants", price: "$64.00", image: produtImageTwo },
      { id: 3, name: "Monstera Deliciosa", type: "Air purifying", price: "$224.90", image: produtImageThree },
      { id: 4, name: "Zz plants", type: "Herbs seeds", price: "$124.90", image: produtImageFour },
      { id: 5, name: "Bird of Paradise", type: "Ceramic pots", price: "$249.90", image: produtImageFive },
      { id: 6, name: "Calathea Beauty Star", type: "Herbs seeds", price: "$79.90", image: produtImageSix },
    ];

    const addToCart = (product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };

    const toggleCart = () => {
      setShowCart(!showCart);
    };

    return (
      <div>
        <header>
          <Header />
          <button
            className="fixed top-5 right-0 lg:top-28 lg:right-4 bg-[#5c9735] text-white px-4 py-2 rounded-full z-50" onClick={toggleCart}> <FontAwesomeIcon icon={faShoppingCart} /> {cartItems.length}
          </button>
        </header>

        <section>
          <div className="w-full py-16 bg-[#f4f6f3]">
            <div className="mx-auto w-[95%] md:w-[87%] py-24 sm:px-6 lg:px-8 bg-white">
              <div className="mx-auto w-[90%] md:w-full lg:w-[90%] bg-white">
                <div className="flex md:flex-row justify-between items-center py-8">
                  <div className="flex flex-col gap-4 font-button">
                    <div>
                      <p className="text-slate-600">Home / Shop</p>
                    </div>
                    <div>
                      <p className="text-stone-700">Showing 1–9 of 25 results</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-[#5c9735] text-white font-button">
                    Default sorting <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {showCart && <Cart cartItems={cartItems} toggleCart={toggleCart} />}
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

  export default Plants;
