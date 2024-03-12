import React, { useContext } from 'react'
import Product from './Product'
import { totList } from "../App";
function RandProduct({onCartEdit,onCartAdd,cartList}) {

    let rands = [8,5,7,12];
    const  productList = useContext(totList);
    let prod = rands.map((item)=>(

     productList.filter(e=> e.id=== item)[0]
        
    ));
    

  return (
    <>
   <div className='text-center w-full bg-black text-white py-1'>People Also buy</div>
    <div className='border-black border-2 h-fit w-full flex flex-row overflow-x-scroll'>
    
    {prod.map((prod)=><Product key={prod.id} onCartEdit={onCartEdit} price={prod.price} productName={prod.productName} imgLink={prod.imgLink} id={prod.id} onCartAdd={onCartAdd} cartList={cartList} rating={prod.rating} />)}
    </div>
    
    </>
  )
}

export default RandProduct