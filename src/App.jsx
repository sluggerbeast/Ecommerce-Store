import { useContext, createContext, useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { findProduct, initialList } from "./func.js";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import Account from "./pages/Account.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
export const totList = createContext();

function App() {
  const CartRef = useRef();

  const [productList, setProductList] = useState(initialList);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setProductList(
          res.products.map((item) => ({
            id: parseInt(item.id),
            productName: item.title,
            price: item.price,
            imgLink: item.thumbnail,
            category: item.category,
            rating: item.rating,
            description:item.description,
            comments: [
              {
                name: "Saurabh",
                rating: 4.5,
                review: "It is a great product",
                userId: "",
              },
              {
                name: "Saurabh",
                rating: 3.5,
                review: "It is a great product",
                userId: "",
              },
              {
                name: "Saurabh",
                rating: 4.5,
                review: "It is a great product",
                userId: "",
              },
              {
                name: "Saurabh",
                rating: 5,
                review: "It is a great product",
                userId: "",
              },
            ],
            images: [...item.images],
          }))
        );
      });
    //console.log(val);
  }, []);

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
    let temp = findProduct(cartList,id);
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
          if (parseInt(item.id) === parseInt(id)) {
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
          <Route
            path="/checkout"
            element={
              <Checkout
                onCartEdit={handleCartEdit}
                cartList={cartList}
                CartRef={CartRef}
                productList={productList}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/products/:prodid"
            element={
              <ProductPage
                onCartEdit={handleCartEdit}
                cartList={cartList}
                onCartAdd={handleAddCart}
                productList={productList}
              />
            }
          />
          <Route path="/*" element={<ComingSoon />} />
        </Routes>
        
      </totList.Provider>
    </>
  );
}

export default App;
