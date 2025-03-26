
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
    {
      id: 1,
      productName: "Echo Dot 3rd Gen",
      price: "2200",
      imgLink:
        "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
      category: "echo",
      rating:4.6,
      comments:[
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 3.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 4.5, review:"It is a great product",userId:""},
        {name: "Saurabh", rating: 5, review:"It is a great product",userId:""},
     ],
     images:[
      
      "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
      "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
      "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
      "https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_QL65_.jpg",
      
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
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      
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
      "https://gs1datakart.org/upload/product_image/890600099/8906000991657/5d10b3e5e738d_f.jpg",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch.jpg",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
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
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Loading...",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 2",
      "https://dummyjson.com/image/500x500/dddddd/000000?text=Product 3",
      
    ]
    },
  ];

