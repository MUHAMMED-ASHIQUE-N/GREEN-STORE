  import { useState } from "react";
  import logoBlack from "../assets/site-logo.svg";
  import logoWhite from "../assets/site-logo-white.svg";
  import { Link, useLocation } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
  import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    return (
      <nav className={`z-[9] ${isHomePage ? "bg-transparent" : "bg-white "} ${isHomePage ? "" :"border-b"} `}>
        <div className={`w-full mx-auto px-4 py-4 ${isHomePage? "text-white" : "text-black"}`}>
          <div className="flex justify-between items-center h-16">

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={` text-xl ${isHomePage ? "text-white" : "text-[#5c9735]"} `}>
                {isOpen ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </button>
            </div>

            <div className="flex-shrink-0">
              <Link to="/" className="block mx-auto">
                <img src={isHomePage ? logoWhite : logoBlack} alt="Logo" className="h-8 mx-auto" />
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <Link to="/cart" className={` text-xl ${isHomePage ? "text-white" : "text-[#5c9735]"} `}>
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
            </div>

            <div className="hidden lg:flex space-x-8">
              <Link to="/" className={`${isHomePage ? "text-white" : "text-black"}`}>Home</Link>
              <Link to="/plants" className={`${isHomePage ? "text-white" : "text-black"}`} >Plants</Link>
              <Link to="/about" className={`${isHomePage ? "text-white" : "text-black"}`}>About</Link>
              <Link to="/contact" className={`${isHomePage ? "text-white" : "text-black"}`}>Contact</Link>
           <a href="#"   className={`${isHomePage ? "text-white" : "text-black"}`}><FontAwesomeIcon icon={faUser} /> </a>  
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white">
            <div className="space-y-2 pt-2 pb-3">
              <Link to="/" className="block  text-[#292725] font-bold hover:bg-stone-400   px-4  py-2">Home</Link>
              <Link to="/plants" className="block  text-[#292725] font-bold hover:bg-stone-400 px-4    py-2">Plants</Link>
              <Link to="/about" className="block  text-[#292725] font-bold hover:bg-stone-400 px-4    py-2">About</Link>
              <Link to="/contact" className="block  text-[#292725] font-bold hover:bg-stone-400  px-4   py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    );
  };

  export default Header;
