import React from 'react'
import Product from '../components/Product'
/// {id:1,productName:"Soda Can", img:"",price:"10",imgLink:"https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",}
export default function HomePage({onCart,productList,cartList,onCartEdit}){
  console.log(productList);

  return (
    <>
    <div className='flex flex-wrap justify-center lg:justify-start w-full px-4 bg-slate-50 min-h-screen h-fit pt-[4em]' >
    {productList.map((prod)=>(
      <Product key={prod.id} onCartEdit={onCartEdit} price={prod.price} productName={prod.productName} imgLink={prod.imgLink} id={prod.id} onCartAdd={onCart} cartList={cartList} />
    ))}
    </div>
    
    </>
  )
}
