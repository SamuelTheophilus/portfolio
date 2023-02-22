import Link from "next/link";
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false);
  return (
    <nav className="w-full shadow-md bg-white justify-between h-20 sticky z-10 top-0 left-0">
      <div className="flex justify-between items-center w-full h-full px-5">
        <div className="">
          <h1>SamuelTheophilus</h1>
        </div>
        <div className="">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm  hover:border-b"> Home</li>
            </Link>
            <Link href="/about">
              <li  className="ml-10 text-sm  hover:border-b">About </li>
            </Link>
            <Link href="/contact">
              <li  className="ml-10 text-sm  hover:border-b">Contact </li>
            </Link>
            <Link href="/skills">
              <li  className="ml-10 text-sm  hover:border-b"> Skills</li>
            </Link>
          </ul>
          <div className="md:hidden hover:cursor-pointer ">
            <button onClick={()=>setIsOpen((prev) => !prev)} className="">
            <AiOutlineMenu size={25} />
            </button>
            {
              isOpen && (
                <div className="flex flex-col mt-3  text-sm absolute right-1 text-left bg-[#495579] w-24 rounded-sm gap-2">
                <Link href={"/"} className="px-1 hover:bg-[white] hover:text-[#495579] text-white"> Home </Link>
                <Link  href={"/about"} className="px-1 hover:bg-[white] hover:text-[#495579] text-white"> About</Link>
                <Link  href={"/contact"} className="px-1 hover:bg-[white] hover:text-[#495579] text-white"> Contact </Link>
                <Link  href={"/skills"} className="px-1  hover:bg-[white] hover:text-[#495579] text-white"> Skills </Link>
              </div>
              )
            }      
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;