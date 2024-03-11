import React from "react";

function CartItems({ id, productName, price, quantity, onCartEdit }) {
  function handleRemove() {
    onCartEdit(id, "minus");
  }
  function handleAdd() {
    onCartEdit(id, "add");
  }

  return (
    <div
      key={id}
      className="border-t-[1px] last:border-b-[1px]  border-black bg-slate-100 mb-0 w-full p-2 py-4 pr-4 pl-4 flex flex-row"
    >
      <div className=" w-[100px] bg-red-300">
        <img src="https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-between ml-4 w-full ">
        <span>
          {id} {productName}
        </span>
        <div className="flex flex-row justify-between items-center my-2">
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
