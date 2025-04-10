
export const handleAddToCart = (id, action = "add") => {
    let temp = findProduct(cartList,id); /// this variable checks if the item exists in cart or not;
    if (temp.length <= 0) {
        onCartAdd(id, productName, price);
    } else {
        onCartEdit(id, action);
    }
    console.log(cartList);
}

export const findProduct = (cartList,id) => {

    return cartList.filter((item) => parseInt(item.id) === parseInt(id));
}

const tell = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
         "https://cdn.dummyjson.com/product-images/1/3.jpg", 
         "https://cdn.dummyjson.com/product-images/1/4.jpg", 
         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
}

const tell2 = {
    id: 1,
    productName: "Echo Dot 3rd Gen",
    price: "2200",
    imgLink:
      "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
    category: "echo",
    rating:4.6,
    comments:[
      {name: "Nice product", rating: 4.5, review:"It is a great product",userId:""},
      {name: "Could be better", rating: 3.5, review:"It is a great product",userId:""},
      {name: "Great", rating: 4.5, review:"It is a great product",userId:""},
      {name: "wowow", rating: 5, review:"It is a great product",userId:""},
   ],
   images:[
    
    "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
    "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
    "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
    "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
    
  ]
  }

  export const initialList = [
    
  ];

