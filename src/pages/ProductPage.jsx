import React, { useContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Stars from "../components/Stars";
import { totList } from "../App.jsx";
import Accordion from "../components/Accordion";
import RandProduct from "../components/RandProduct";
import { findProduct } from "../func.js";

function ProductPage({ onCartEdit, cartList, onCartAdd }) {
  const { prodid } = useParams();
  const cimgRef = useRef();
  const refToTop = useRef();
  
  const  productList = useContext(totList);
 

  //const  productList = useContext(totList);
  const product = findProduct(productList,prodid)[0];
  console.log(product, prodid);
  if (product == undefined) {
    console.log("product undefined")
    return (<div className="pt-[80px] text-center">Product Not Found!</div>)
  }

  const [currentImage, setCurrentImage] = useState(product.imgLink);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
      //console.log("inside");
    };
    handleScroll();
    //console.log("inside effet");
    setCurrentImage(product.imgLink);

  }, [prodid]);
  function handleAddItemToCart() {
    console.log(cartList);
    let temp = findProduct(cartList,prodid) /// this variable checks if the item exists in cart or not;
    console.log(temp);
    if (temp.length <= 0) {
      onCartAdd(prodid, product.productName, product.price);
    } else {
      console.log("here",prodid)
      onCartEdit(prodid, "add");
    }
  }

  function handleCurrentImage(item) {
    setCurrentImage(item);
  }
  const items = [
    { title: "Features", content: "Content for section 1" },
    { title: "More Details", content: "Content for section 2" },
    // ... other sections
  ];

  const imageList = product.images;

  return (
    <>
      <div
        ref={refToTop}
        className="flex flex-col sm:flex-row bg-white h-[90vh] sm:max-h-[70vh] "
      >
        <div className="w-fit mt-2 sm:m-0  md:w-[20%] sm:flex lg:flex-[10%] h-fit  sm:h-[70vh] ">
        <div className=" flex w-fit md:flex flex-row md:flex-col bg-white h-fit border-2 md:border-black m-1 overflow-x-scroll sm:overflow-y-scroll ">
            {imageList.map((item) => (
              <img
                onClick={() => {
                  handleCurrentImage(item);
                }}
                ref={cimgRef}
                src={item}
                className="mb-2"
                alt="xyz"
              />
            ))}
          </div>
         </div>
        <div className="hidden w-0 md:block sm:w-fit lg:w-fit max-w-[90%] mt-2   md:max-h-[100vh]  self-center sm:self-auto overflow-hidden">
          <img src={currentImage} alt="xyz" className="max-w-[100vh]" />
        </div>
        {/* <div className="w-fit  sm:w-[20%] sm:hidden lg:flex-[10%] h-fit  sm:h-[70vh] ">
          <div className="flex flex-row sm:flex-col bg-white h-fit border-2 sm:border-black m-1 overflow-x-scroll sm:overflow-y-scroll ">
            {imageList.map((item) => (
              <img
                onClick={() => {
                  handleCurrentImage(item);
                }}
                ref={cimgRef}
                src={item}
                className="mb-2"
                alt="xyz"
              />
            ))}
          </div>
        </div> */}
        <div className="flex-[60%]  flex flex-col items-center">
          <div className=" w-full h-[25vh] sm:m-10 sm:pl-10 flex flex-col justify-between items-center sm:items-start">
            <p className="mb-2">
              <strong>
                <p className="text-[40px] text-center sm:text-justify">{product.productName} </p>
              </strong>
            </p>
            <p className="text-[30px] mb-2">
              <i className="fa fa-inr" /> {product.price}
            </p>
            <p className="mb-4">
              <Stars size="30px" rating={product.rating} />
            </p>
            <button
              onClick={handleAddItemToCart}
              className="bg-black text-white p-2 w-[200px] mb-4"
            >
              Add to Cart
            </button>
            
          <Accordion items={[{title:"Description ",content:product.description},{title:"Description ",content:product.description}]} /> 
          </div>
          {/* Description of the prodcut below */}
          
           
        </div>
      </div>
      {product && <RandProduct
        onCartEdit={onCartEdit}
        onCartAdd={onCartAdd}
        cartList={cartList}
      />}
      <Review rating={product.rating} reviews={product.comments} />
      
    </>
  );
}

export default ProductPage;
