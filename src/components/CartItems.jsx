import React, { useContext } from "react";
import { totList } from "../App.jsx";
function CartItems({ id, productName, price, quantity, onCartEdit }) {
  const  productList = useContext(totList);

  function handleRemove() {
    onCartEdit(id, "minus");
  }
  function handleAdd() {
    onCartEdit(id, "add");
  }
  const product = productList.filter(
    (item) => parseInt(item.id) === parseInt(id)
  )[0];

  return (
    <div
      key={id}
      className="border-t-[1px] last:border-b-[1px]  border-black bg-slate-100 mb-0 w-full p-2 py-4 pr-4 pl-4 flex flex-row"
    >
      <div className=" hidden sm:block w-[100px]">
        <img src={product.imgLink} alt="" />
      </div>
      <div className="flex flex-col sm:justify-between ml-4 w-full ">
        <span>
          {id}  {productName}
        </span>
        <div className="flex flex-col sm:flex-row justify-between items-center my-2">
          <div>
            <span>
              Price : <i class="fa fa-inr mr-1" />
              {price}
            </span>
          </div>
          <div className="bg-slate-200 border-slate-300 border-[1px]  w-fit overflow-hidden flex items-center justify-center h-[23px] gap-3">
            <button
              onClick={handleRemove}
              className="hover:bg-slate-300 justify-center p-1"
            >
              <i class="fa fa-minus" />
            </button>
            <span className="mr-1 ml-1 ">
              <strong>{quantity}</strong>
            </span>
            <button
              onClick={handleAdd}
              className="hover:bg-slate-300 justify-center p-1"
            >
              <i class="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
