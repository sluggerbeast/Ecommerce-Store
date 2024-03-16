import React, { useEffect, useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { totList } from "../App";


function NavBar({cartSize,CartRef,onSearch}) {
  const totLis  = useContext(totList);
  const [searchQuery, setSearchQuery] = useState();
  const [searchResult, setSearchResult] = useState([ ])
  const navigate = useNavigate();

  function handleSearchClick(id){
    setSearchQuery("")
    navigate(`/products/${id}`);
  }
  function handleSearch(e){
    setSearchQuery(e.target.value.toLowerCase());
   
    handleSearchFilter(e.target.value.toLowerCase());
    //console.log(e.target.value);
  }

  function handleSearchFilter(searchT){
    if(searchT){
    setSearchResult(
      totLis.productList.filter((item)=>{
         searchT = searchT.toLowerCase();
    const productName = item.productName.toLowerCase();
    const productDescription = item.description.toLowerCase();
        
      return productName.includes(searchT) || productDescription.includes(searchT);
      }
      )
    )
    }
  }

  

  function handleOpenCart(){
    CartRef.current.style.display = 'block';
  }

  return (
    <>
      <nav className="bg-gray-800 h-[60px] max-h-[60px ] text-white flex justify-between items-center p-4 fixed w-full z-10">
        
        <Link to="/" class="text-xl font-bold">
          eStore <i class="fa fa-space-shuttle my-3"></i>
        </Link>

        <div>
          <input value={searchQuery} onChange={handleSearch} type="text" className="lg:p-1 pl-2 w-[30vw] lg:w-[25vw] rounded-s-lg text-black focus:outline-none" placeholder="Search for products..." />
          <button className="lg:p-1 px-1  sm:w-[10vw] rounded-r-lg md:w-[10vw] lg:w-[5vw] bg-indigo-500 lg:rounded-r-lg text-white hover:bg-blue-700 focus:outline-none"><i class="fa fa-search"/>
</button>
        </div>
        

        <ul class="flex space-x-4 px-2">
          <li className="hidden sm:block">
            <Link to="/" class="hover:text-gray-400">
              Page
            </Link>
          </li>
          <li>
            <Link to="/account" className="hover:text-gray-400">
              <i className="fa fa-user mr-2 text-[30px]" ></i>
            </Link>
          </li>
          <li>
            <div onClick={handleOpenCart} >
              <Link  >
                {cartSize()>0 && <div className="bg-red-300 absolute right-3 w-4 h-4 hover:text-slate-100 rounded-[50%] text-xs text-center">{cartSize()}</div>}
                <i class="fa fa-shopping-cart text-[30px] hover:text-gray-400" aria-hidden="true"></i>
              </Link>
            </div>
          </li>
        </ul>
        
        
      </nav>
      <nav className="bg-gray-100 h-[60px] text-white  w-full"></nav>
      <div className="w-full flex flex-col items-center justify-center fixed z-5">
        {searchQuery&& <SearchBox onSearchClick={handleSearchClick} searchResult={searchResult}  />}
        </div>
      
    </>
  );
}



function SearchBox({searchResult,onSearchClick}) {
  
  function handleClick(id){
    onSearchClick(id)
  }

  return (
    <>
    <div className="flex flex-col p-2 bg-slate-200 justify-start w-[60vw] md:w-[45vw] lg:w-[30vw] h-fit max-h-[30vh] sm:max-h-[40vh] overflow-scroll ">
    {searchResult.map((item)=>(<button onClick={()=>{handleClick(item.id)}} className="bg-white text-black border-slate-200 border-b-[1px] p-1">{item.productName}</button>))}
      
      
    </div>

    </>
  )
}



export default NavBar;


