import React, { useContext, useState } from "react";
import { findProduct } from "../func";
import { totList } from "../App";
function AddToCartBtn({
  id,
  animate,
  btnText,
  className,

  onCartEdit,
  action = "add",
  ...props
}) {
  const totLis = useContext(totList);
  const [cartBtnText, setCartBtnText] = useState(btnText);
  const [cartAddedCss, setCartAddedCss] = useState(
    animate ? className + " bg-black" : className
  );
  function CartButtonAni() {
    setCartAddedCss(className + " bg-blue-800");
    setCartBtnText("Item Added!");
    setTimeout(() => {
      setCartBtnText("Add to Cart");
      setCartAddedCss(className + " bg-black");
    }, 1000);
  }
  function handleAddToCart() {
    //onCartEdit(id, action);
    totLis.onCartEdit(id,action);
    animate?CartButtonAni() : null;
  }
  return (
    <button onClick={handleAddToCart} className={cartAddedCss} {...props}>
      {cartBtnText}
    </button>
  );
}

export default AddToCartBtn;
