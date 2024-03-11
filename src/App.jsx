import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import Account from "./pages/Account.jsx";

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
    },
    {
      id: 2,
      productName: "Soda Can",
      price: "18",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
    },
    {
      id: 3,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "watch",
    },
    {
      id: 4,
      productName: "Watch",
      price: "100",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
    },
    {
      id: 5,
      productName: "Watch",
      price: "10",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
    },
    {
      id: 6,
      productName: "Soda Can",
      price: "113",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
    },
    {
      id: 7,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "watch",
    },
    {
      id: 8,
      productName: "Soda Can",
      price: "120",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
    },
    {
      id: 9,
      productName: "Watch",
      price: "50",
      imgLink:
        "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      category: "watch",
    },
    {
      id: 10,
      productName: "Soda Can",
      price: "90",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
    },
    {
      id: 11,
      productName: "cube",
      price: "50",
      imgLink:
        "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      category: "toy",
    },
    {
      id: 12,
      productName: "Soda Can",
      price: "70",
      imgLink:
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      category: "drinks",
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
        <Route path="/checkout" element={<Checkout onCartEdit={handleCartEdit} cartList={cartList} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:prodid" element={<ProductPage productList={productList} />} />
      </Routes>
    </>
  );
}

export default App;
