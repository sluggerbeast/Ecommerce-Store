import React, { useRef, forwardRef } from "react";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const Cart = forwardRef(function Cart({ cartList,onCartEdit }, ref) {
  const cartRef = useRef();
  let totalCost = 0;
  function handleCartClose() {
    ref.current.style.display = "none";
  }
  return (
    <>
      <div
        ref={ref}
        className="hidden h-full w-[50vw] sm:w-[45vw] lg:w-[30vw] z-30 bg-white fixed right-0 shadow-lg"
      >
        <button
          className="relative hover:scale-125 md:right-[-39vw] lg:right-[-28vw] right-[-38vw] top-1"
          onClick={handleCartClose}
        >
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="flex flex-col items-center justify-center w-full">
          {cartList.length>0 && <span className="mb-2">
            <strong>
              <h1>Cart</h1>
            </strong>
          </span>}
          {cartList.length>0 && <div className=" max-h-[70vh] w-full overflow-y-scroll ">
          {cartList.map((item) => {
            totalCost += item.price * item.quantity;
            return (
              <CartItems onCartEdit={onCartEdit} id={item.id} productName={item.productName} price={item.price} quantity={item.quantity} />
            );
          })}
          </div>}
          {cartList.length>0 ? <div className="w-full p-3">
            <Link to='/checkout'>  <button className="bg-red-300 w-full p-3 rounded-sm">
              Checkout <i className="fa fa-inr mr-1"></i>{totalCost}
            </button>
            </Link>
          </div>:
          <p className="relative top-52"><strong>Cart is empty, Happy shopping.</strong></p>}
        </div>
      </div>
    </>
  );
});

export default Cart;
