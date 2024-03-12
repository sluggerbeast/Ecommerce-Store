import React from "react";
import { useNavigate } from "react-router-dom";
import Stars from "./Stars";
//// {id:1,productName:"Soda Can", img:"",price:"10",imgLink:"https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",}
function Product({
  imgLink,
  price,
  onCartAdd,
  productName,
  id,
  cartList,
  onCartEdit,
  rating
}) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    
    navigate(`/products/${id}`);
    //window.location.reload(); // Replace '/about' with your target path
  };
  
  function handleAddToCart() {
    let temp = cartList.filter((item) => item.id === id); /// this variable checks if the item exists in cart or not;
    if (temp.length <= 0) {
      onCartAdd(id, productName, price);
    } else {
      onCartEdit(id, "add");
    }
    console.log(cartList);
  }

  return (
    <>
      <div className="p-3 m-5 bg-slate-100 h-fit max-w-[350px]  lg:h-[70vh] w-fit rounded lg:overflow-hidden">
        <div onClick={handleProductClick}>
          <p>{id}</p>
          <div className="w-[300px] h-[300px] bg-white overflow-hidden">
            <img
              width="300px"
              className="hover:scale-105 max-w-[300px]"
              src={imgLink}
              alt="product Image"
            />
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
        <button
          onClick={handleAddToCart}
          className=" w-full text-slate-100  bg-black rounded p-3"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}



export const ProductComp = () => {
  return (
    <div className="p-3 m-5 bg-slate-500 h-fit max-w-fit sm:w-[300px] lg:h-[70vh]  rounded overflow-hidden">
        <div onClick={handleProductClick}>
          <p>{id}</p>
          <div className="w-[300px] h-[300px] bg-white overflow-hidden">
            <img
              width="300px"
              className="hover:scale-105"
              src={imgLink}
              alt="product Image"
            />
          </div>

          <span className="ml-1 text-xl font-bold ">{productName}</span>
          <p className="ml-1 mb-1">
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            <strong>{price}</strong>
          </p>
          <p className="mb-2">
            Ratings <Stars rating={rating} />
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className=" w-full text-slate-100  bg-black rounded p-3"
        >
          Add to Cart
        </button>
      </div>
  )
}


export default Product;
