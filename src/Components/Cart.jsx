import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cartItems, toggleCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace("$", "")), 0).toFixed(2);
  };

  return (
    <div className="fixed top-0 right-0  w-full md:w-[80%] xl:w-[35%] h-full bg-white shadow-xl   font-button z-50">
        <div className="flex items-center justify-between py-4 border-b">
        <h2 className="text-lg ms-8 ">Shopping Cart</h2>
        <button className="text-lg me-8" onClick={toggleCart}>
        <FontAwesomeIcon icon={faCircleXmark}/>
      </button>
        </div>
   

     

      <div className="space-y-4 overflow-y-auto min-h-[65vh] py-8">
        {cartItems.length === 0 ? (
          <p className="flex items-center justify-center h-[80vh]">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover ms-8" />
              <div className="flexflex-col ">
                <p className="font-semibold">{item.name}</p>
                
                <p> {item.quantity} × ${(item.quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}</p>
                
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <>
        <div>
        <div className="flex items-center justify-between py-3 border-y">
          <p className="font-bold ms-8">Subtotal: </p>
          <p className="me-8">${getTotalPrice()}</p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 gap-4"> 
            <button className="py-2 bg-[#5c9735] w-[90%]  text-white  ">View Cart</button>
            <button className="py-2 bg-[#5c9735] w-[90%] text-white ">Checkout</button>
        </div>
        </div>
        </>
      )}
      <div>
      </div>
    </div>
  );
};

export default Cart;
