import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
function Navbar(data)
{
  return (
    <div class="py-1 bg-white shadow-xl">
        <div className=" max-w-6xl flex justify-between mx-auto items-center">
          <img className="h-25 border-2 border-primary-dark shadow-xl rounded-full" src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" ></img>
          <div className="relative">
          <span className=" px-1 absolute -right-1 top-0 rounded-full bg-primary-dark text-white " >{data.productCount}</span>
         <HiOutlineShoppingBag  className="text-6xl text-primary-default"></HiOutlineShoppingBag>
          </div>
        </div>
     </div>);
}
export default Navbar;