import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    const navItems=[
        {
            title: "Home",
            path:"/",
        },
        {
            title: "About",
            path:"/about",
        },
        {
            title: "Services",
            path:"/services",
        },
        {
            title: "Blog",
            path:"/blog",
        },
        {
            title: "Contacts",
            path:"/contacts",
        },
    ]
    return (
        <div className=' bg-gray-700 text-gray-200 hover:bg-blue-500'>
            <div className="navbar container mx-auto">
  <div className="navbar-start">
     <Link href={'/'}>
     <Image alt="logo" src="/assets/logo.svg" height={60} width={80} />
        </Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className='flex items-center space-x-6'>
        {
            navItems.map((item) =>(
                <Link className='font-semibold hover:text-orange-400 duration-300' href={item.path} key={item.path}>{item.title}</Link>
            )
            )
        }
    </div>
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}
  </div>
  <div className="navbar-end">
    <div className='flex space-x-3 items-center'>
    <FaCartArrowDown className='text-3xl' />
  <FaSearch className='text-2xl' />
  <Link href="/login" className="btn btn-outline text-orange-500 hover:text-blue-500 font-semibold">Login
</Link>

    <a className="btn btn-outline bg-slate-100 hover:bg-green-400 font-semibold px-8">Appointmen</a>
    </div>
  
  </div>
</div>
</div>
    );
}
export default Navbar;