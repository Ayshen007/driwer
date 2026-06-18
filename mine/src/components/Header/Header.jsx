import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <div className="w-[100%] h-13 bg-blue-950 flex justify-between items-center  " >
        <div className="w-51 gap-2.5 flex  flex justify-between items-center ml-3.5 text-amber-100  ">
          <BsTelephone />
          <p>Call : +994  50 388 27 07</p>
        </div>
        <div className="w-51  flex  flex justify-between items-center text-amber-100 ">
          <MdEmail />
          <p>Email : demo@gmail.com</p>
        </div>
        <div className="gap-1.5 flex  flex justify-between items-center  mr-3.5 text-amber-100"><IoLocationOutline /> <p>Location</p>
</div>
      </div>
      <div className="w-[100%] bg-amber-100 h-20 flex justify-between  items-center">
        <p className="text-2xl ml-2.5">Carint</p>
      <ul  className="flex gap-4 mr-3 ">
       <li> <Link to="/"> HOME </Link></li> 
       <li><Link to="/services">SERVICES</Link> </li>
       <li> <Link to="/about">ABOUT</Link> </li>
       <li> <Link to="contact">CONTACT US</Link></li>
       <li className="flex justify-center items-center"><IoPerson />LOGIN</li>
         <div className="text-xl">   <IoSearch /></div>

       </ul>
      </div>
    </div>
  );
};

export default Header;
