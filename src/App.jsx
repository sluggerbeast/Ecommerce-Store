import { useContext,createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import Account from "./pages/Account.jsx";
export const totList = createContext()

function App() {
  const CartRef = useRef();
  
  const initialList = [
    {
      id: 1,
      productName: "Watch",
      price: "10",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
      rating:3.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 2,
      productName: "Soda Can",
      price: "18",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
      rating:1.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 3,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "watch",
      rating:2.3,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 4,
      productName: "Watch",
      price: "100",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 5,
      productName: "Watch",
      price: "10",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
      rating:4,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 6,
      productName: "Soda Can",
      price: "113",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
      rating:3.4,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 7,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "watch",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 8,
      productName: "Soda Can",
      price: "120",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 9,
      productName: "Watch",
      price: "50",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 10,
      productName: "Soda Can",
      price: "90",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 11,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "toy",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
    {
      id: 12,
      productName: "Soda Can",
      price: "70",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 1",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 2",
      "https://dummyjson.com/image/500x500/f000f0/ffffff?text=Product 3",
      
    ]
    },
  ];

  const [productList, setProductList] = useState([...initialList]);
  const [cartList, setCartList] = useState([]);


  function getTotalCartItems() {
    let tot = 0;
    cartList.map((item) => {
      tot += parseInt(item.quantity);
      return item;
    });
    return tot;
  }

  function handleAddCart(id, productName, price, quantity = 1, category = "") {
    setCartList((prev) => {
      return [
        ...prev,
        {
          id: id,
          productName: productName,
          price: price,
          category: category,
          quantity: quantity,
        },
      ];
    });

    console.log("item added to cart");
  }
  function handleCartEdit(id, action) {
    let temp = cartList.filter((item) => item.id === id);
    let quantity = 1;
    quantity = temp[0].quantity;
    if (action === "minus") {
      if (quantity >= 1) {
        quantity--;
      }
    }
    if (action === "add") {
      quantity++;
    }
    if (quantity == 0) {
      setCartList((prevCart) => {
        return prevCart.filter((item) => item.id !== id);
      });
    } else {
      console.log("cart edit", id, quantity);
      setCartList((prevCart) => {
        return prevCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
          console.log(item);
        });
      });
      console.log(cartList);
    }
  }

  return (
    <>
      <totList.Provider value={productList}>
      <div>
        <NavBar cartSize={getTotalCartItems} CartRef={CartRef} />
        <Cart ref={CartRef} onCartEdit={handleCartEdit} cartList={cartList} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              productList={productList}
              onCart={handleAddCart}
              cartList={cartList}
              onCartEdit={handleCartEdit}
            />
          }
        />
        <Route path="/checkout" element={<Checkout onCartEdit={handleCartEdit} cartList={cartList} CartRef={CartRef} productList={productList} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:prodid" element={<ProductPage  onCartEdit={handleCartEdit} cartList={cartList} onCartAdd={handleAddCart} productList={productList} />} />
      </Routes>
      </totList.Provider>
    </>
  );
}

export default App;
