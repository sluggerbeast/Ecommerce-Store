import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";
import { findProduct } from "../func";
import AddToCartBtn from "./AddToCartBtn";
//// {id:1,productName:"Soda Can", img:"",price:"10",imgLink:"https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",}
function Product({
  imgLink,
  price,
  onCartAdd,
  productName,
  id,
  cartList,
  onCartEdit,
  rating,
  imageList
}) {
  const navigate = useNavigate();
  const [cartBtnText,  setCartBtnText] = useState("Add to Cart");
  const [cartAddedCss, setCartAddedCss]=useState("bg-black");
  const handleProductClick = () => {
    
    navigate(`/products/${id}`);
    //window.location.reload(); // Replace '/about' with your target path
  };

  function CartButtonAni(){
    setCartAddedCss("bg-blue-800")
    setCartBtnText("Item Added!");
    setTimeout(()=>{
      setCartBtnText("Add to Cart")
      setCartAddedCss("bg-balck")
    },1000);
  }
  
  function handleAddToCart() {
    let temp = findProduct(cartList,id) /// this variable checks if the item exists in cart or not;
    if (temp.length <= 0) {
      onCartAdd(id, productName, price);
    } else {
      onCartEdit(id, "add");
    }
    console.log(cartList);
    CartButtonAni();
  }

  return (
    <>
      <div className="p-3 m-5 bg-slate-100 h-fit max-w-[350px]  lg:h-[70vh] w-fit rounded ">
        <div onClick={handleProductClick}>
          
          <div 
            style={{backgroundImage:`${imageList[imageList.length>=2?1:imageList.length-1]}`}}
          className="relative w-[300px] h-[300px] bg-white overflow-hidden z-0">
            <img
              width="300px"
              className="hover:scale-105 absolute top-0 left-0 w-full h-full object-cover z-10"
              src={imageList[imageList.length>=2?1:imageList.length-1]}
              alt="product Image"
              loading="lazy"
            />
            {/* <BlurredImage imageUrl={imageList[imageList.length>=2?1:imageList.length-1]} altText="something went wrong" /> */}
          </div>

          <span className="ml-1 text-xl font-bold text-wrap">{productName}</span>
          <p className="ml-1 mb-1">
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            <strong>{price}</strong>
          </p>
          <p className="mb-2">
            Ratings <Stars rating={rating} />
          </p>
        </div>
        {/* <button
          onClick={handleAddToCart}
          className={" w-full text-white bg-black rounded p-3 "+cartAddedCss}
        >
          {cartBtnText}
        </button> */}
        <AddToCartBtn id={id} animate={true} btnText="Add to Cart" onCartEdit={onCartEdit}  className="w-full text-white bg-black rounded p-3 "/>
      </div>
    </>
  );
}


const BlurredImage = ({ imageUrl, altText, width = 'w-full', height = 'h-full' }) => {
  return (
    <div className={`relative ${width} ${height}`}>
      <img
        src={imageUrl}
        alt={altText}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-900 opacity-25 filter blur-md z-0`}
      />
    </div>
  );
};





export default Product;
