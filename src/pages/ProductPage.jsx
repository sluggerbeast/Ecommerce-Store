import React from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
function ProductPage({ productList }) {
  const { prodid } = useParams();
  const product = productList.filter((item) => parseInt(item.id) === parseInt(prodid))[0];
  console.log(product, prodid);

  if(product==undefined){
    return (<div className="pt-[80px] text-center">Product Not Found!</div>)
  }
  return (
    <>
      <div className="flex flex-row bg-slate-400 pt-[60px] h-[100vh]">
        <div className="w-0 lg:flex-[15%] bg-slate-200">
          Product {prodid}
          <div className="bg-white h-40 border-2 border-black m-1">
            <img src={product.imgLink} alt="xyz" />
          </div>
        </div>
        <div className="flex-[70%] lg:flex-[50%]  bg-slate-100">
          <img src={product.imgLink} alt="xyz" />
        </div>
        <div className="flex-[60%] bg-slate-400 flex flex-col items-center">
          <p>{product.productName}</p>
          <p> ${product.price}</p>
          <p>ratings</p>
          <button className="bg-black text-white p-2">Add to Cart</button>
        </div>
      </div>
      <Review />
    </>
  );
}

export default ProductPage;
