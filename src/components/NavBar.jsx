import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

function NavBar({cartSize,CartRef}) {

  function handleOpenCart(){
    CartRef.current.style.display = 'block';
  }

  return (
    <>
      <nav className="bg-gray-800 h-[60px] text-white flex justify-between items-center p-4 fixed w-full z-10">
        <Link to="/" class="text-xl font-bold">
          Store<i class="fa fa-space-shuttle ml-2" aria-hidden="true"></i>
        </Link>

        <div>
          <input type="text" className="p-1 pl-2 w-[30vw] md:w-[20vw] rounded-s-lg text-black focus:outline-none" placeholder="Search for products..." />
          <button className="p-1 w-[5em] bg-indigo-500 rounded-r-lg text-white hover:bg-blue-700 focus:outline-none">search</button>
        </div>

        <ul class="flex space-x-4 px-2">
          <li>
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
    </>
  );
}

export default NavBar;
