import React from "react";
import { useNavigate } from 'react-router-dom';
//// {id:1,productName:"Soda Can", img:"",price:"10",imgLink:"https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",}
function Product({imgLink,price,onCartAdd,productName,id,cartList,onCartEdit}) {
    const stars = [];
    const navigate = useNavigate();
    for (let i = 0; i < 4; i++) {
        stars.push(<i key={i} className="fa fa-star text-[#ffa41c]" aria-hidden="true"></i>);
      }
      stars.push(<i class="fa fa-star-o text-[#ffa41c]" aria-hidden="true"/>
      )

      const handleProductClick = () => {
        navigate(`/products/${id}`); // Replace '/about' with your target path
      };
      function handleAddToCart(){
         
        let temp = cartList.filter(item =>  item.id===id); /// this variable checks if the item exists in cart or not;
        if(temp.length <= 0){
            
            onCartAdd(id,productName,price);
        }else{
             
            onCartEdit(id,"add")
        }
        console.log(cartList)
      }

  return (
    <>
      <div onClick={handleProductClick} className="p-3 m-5 bg-slate-300 h-[70vh] w-fit rounded">
        <p>{id}</p>
        <div className="w-[300px] h-[300px] bg-white overflow-hidden">
        <img
          width="300px"
          className="hover:scale-105"
          src={imgLink}
          alt="product Image"
        />
        </div>
        
        <span className="ml-1 text-xl font-bold">{productName} 
         
        </span>
        <p className="ml-1 mb-1">
          
          <i className="fa fa-inr" aria-hidden="true"></i> <strong>{price}</strong>
        </p>
        <p className="mb-2">Ratings {stars}
</p>
        <button onClick={handleAddToCart} className=" w-full text-slate-100  bg-black rounded p-3">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Product;
