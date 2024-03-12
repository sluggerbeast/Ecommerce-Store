import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";

///{id:1,productName:"Watch", price:"10",category:""}
export default function Checkout({ cartList, onCartEdit,CartRef }) {
  let totalCost = 0;
  console.log(cartList);
  useEffect(()=>{
    CartRef.current.style.display = "none";
  },[])
  return (
    <>
      <div className="pt-[5px] flex flex-col items-center">
        <h1>
          <strong>Checkout</strong>
        </h1>
        <div className="w-[70vw] mt-2 lg:w-[50vw] max-h-[70vh] overflow-y-scroll">
          {cartList.map((item) => {
            totalCost += item.price * item.quantity;
            return (
              <CartItems
                onCartEdit={onCartEdit}
                id={item.id}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })}
        </div>
        {cartList.length>0 && <div className="bg-slate-50 w-[70vw] lg:w-[50vw] pt-3 ">
          <div className="pb-3">Total: <i className="fa fa-inr mr-1" />{totalCost}</div>
          <button className="bg-black text-white p-3 w-[70vw] lg:w-[50vw]">
            Pay <i className="fa fa-inr mr-1 ml-1" />{totalCost}
          </button>
        </div>}
      </div>
    </>
  );
}
