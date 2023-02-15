import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white justify-between h-20 sticky z-10 top-0 left-0">
      <div className="flex justify-between items-center w-full h-full px-5">
        <div className="">
          <h1>Samuel Theophilus</h1>
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
        </div>


      </div>
    </nav>
  );
}

export default Navbar;