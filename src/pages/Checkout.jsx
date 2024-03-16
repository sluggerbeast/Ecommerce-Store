import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";

///{id:1,productName:"Watch", price:"10",category:""}
export default function Checkout({ cartList, onCartEdit,CartRef }) {
  let totalCost = 0;
  const [payPressed, setPayPressed] = useState(false);
  //console.log(cartList);
  useEffect(()=>{
    CartRef.current.style.display = "none";
  },[])

  
  function handlePayClick(){
    setPayPressed(true);

  }


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
          <button onClick={handlePayClick} className="bg-black text-white p-3 w-[70vw] lg:w-[50vw]">
            { !payPressed? <>Pay <i className="fa fa-inr mr-1 ml-1" />{totalCost}</>:
             <><i class="fa fa-spinner animate-spin text-blue-100 mr-1" />
           Processing...</>}
          </button>
         
        </div>
        }
      </div>
      
          
      {payPressed && <div>
            <CheckoutBtn />
             </div>}
    </>
  );
}

import { loadStripe } from '@stripe/stripe-js';

function prePay(){
  let stripePromise;
  const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= "pk_test_51OspyvSDjv5U4D3yA3W31pcuPIZALD0EWATfEvSp9pZ2vXB8RZT7iek8wLtmmZ3BDuym7CyjVl7i0HK3i4J6N9QA00gG8U9ELn"
  if (!stripePromise) {
    stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
  return stripePromise;
};

}

function CheckoutBtn() {
  const SK = "sk_test_51OspyvSDjv5U4D3yQRFj07bOJ87TBKniGSMMRw5zUM8Fz8fAmsBIdEYkjghXEo8FrWseTIsZXp9Zn90yurvoYgA800tXIIhiFM"
  const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= "pk_test_51OspyvSDjv5U4D3yA3W31pcuPIZALD0EWATfEvSp9pZ2vXB8RZT7iek8wLtmmZ3BDuym7CyjVl7i0HK3i4J6N9QA00gG8U9ELn"
  const NEXT_PUBLIC_STRIPE_PRICE_ID='price_my_id'
  const [isProcessing, setIsProcessing] = useState(false);

  
    
  useEffect(()=>{
    async function handleCheckout() {
      const stripe = await prePay();
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1OufRpSDjv5U4D3y9SaCG7wj",
            quantity: 1,
          },
        ],
        mode: 'subscription',
        successUrl: `https://pareekbackend.netlify.app/api/success`,
        cancelUrl: `https://pareekstore.netlify.app/`,
        customerEmail: 'customer@email.com',
      });
      console.log(error.message);
    }

    handleCheckout();
  })
 

  return (
    <>
    <h1>Processing payment...</h1>
    </>
  )
}





