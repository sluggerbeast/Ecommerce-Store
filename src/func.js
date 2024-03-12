
export const handleAddToCart = (id,action="add")=>  {
    let temp = cartList.filter((item) => item.id === id); /// this variable checks if the item exists in cart or not;
    if (temp.length <= 0) {
      onCartAdd(id, productName, price);
    } else {
      onCartEdit(id, action);
    }
    console.log(cartList);
  }

 
  