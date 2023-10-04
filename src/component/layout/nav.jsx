import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  md:items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-8" src="logo.svg" alt="" />
            <span className="ml-3 text-xl">MyShop</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
           <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
           <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
           <Link href="/product" className="mr-5 hover:text-gray-900">Products</Link>
           <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
          </nav>
          <button className=" text-white bg-black border-0 py-2 px-4 my-3 md:mt-0 focus:outline-none hover:bg-gray-700 rounded text-sm">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
