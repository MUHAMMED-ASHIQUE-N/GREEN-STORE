import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product, addToCart }) => (
  <div className="flex flex-col">
    <div className="relative group">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-[200px] md:max-w-96 cursor-pointer"
      />
     
      <div
        className="absolute top-4 right-4 flex items-center justify-center bg-white rounded-full shadow-lg lg:opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer duration-300"
        onClick={() => addToCart(product)}
      >
        <FontAwesomeIcon icon={faBagShopping} className="p-2 text-stone-700" />
      </div>
    </div>
    <div className="font-title py-2">
      <p>
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </p>
      <p>{product.name}</p>
      <p>{product.type}</p>
      <h1>{product.price}</h1>
    </div>
  </div>
);

export default ProductCard;
