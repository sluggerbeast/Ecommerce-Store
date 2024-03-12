import React, { useContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Stars from "../components/Stars";
import { totList } from "../App.jsx";
import Accordion from "../components/Accordion";
import RandProduct from "../components/RandProduct";

function ProductPage({ onCartEdit, cartList, onCartAdd }) {
  const { prodid } = useParams();
  const cimgRef = useRef();
  const refToTop = useRef();
  
  const  productList = useContext(totList);
 

  //const  productList = useContext(totList);
  const product = productList.filter(
    (item) => parseInt(item.id) === parseInt(prodid)
  )[0];
  console.log(product, prodid);
  if (product == undefined) {
    return <div className="pt-[80px] text-center">Product Not Found!</div>;
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
    let temp = cartList.filter((item) => item.id === prodid); /// this variable checks if the item exists in cart or not;
    console.log(temp);
    if (temp.length <= 0) {
      onCartAdd(prodid, product.productName, product.price);
    } else {
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
        className="flex flex-col sm:flex-row bg-white h-[100vh] md:max-h-[100vh] "
      >
        <div className="w-0 hidden sm:block lg:flex-[10%]  h-[70vh] overflow-scroll">
          <div className="bg-white h-fit border-2 border-black m-1 ">
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
        <div className="w-fit max-w-[90%]  lg:flex-[50%] md:max-h-[100vh]  self-center sm:self-auto overflow-hidden">
          <img src={currentImage} alt="xyz" className="max-w-[100vh]" />
        </div>
        <div className="flex-[60%]  flex flex-col items-center">
          <div className=" w-full h-[25vh] sm:m-10 sm:pl-10 flex flex-col justify-between items-center sm:items-start">
            <p>
              <strong>
                <p className="text-[50px]">{product.productName}</p>
              </strong>
            </p>
            <p className="text-[30px]">
              <i className="fa fa-inr" /> {product.price}
            </p>
            <p>
              <Stars size="30px" rating={product.rating} />
            </p>
            <button
              onClick={handleAddItemToCart}
              className="bg-black text-white p-2 w-[200px]"
            >
              Add to Cart
            </button>
          </div>
          {/* <Accordion items={items} />  */}
        </div>
      </div>
      <RandProduct
        onCartEdit={onCartEdit}
        onCartAdd={onCartAdd}
        cartList={cartList}
      />
      <Review rating={product.rating} reviews={product.comments} />
      
    </>
  );
}

export default ProductPage;
