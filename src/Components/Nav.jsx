import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import {navLinks} from '../Constants/constants'
const Nav = () => {
  return (
    <header className=" absolute padding-x py-8 z-10 w-full ">
      <nav className="flex justify-between max-container items-center">
        <img src={headerLogo} alt="" width={130}
        height={29} className="cursor-pointer"/>
        {/** now we want to render the links between the nike logo and hamburger logo  */}
        <ul className="flex-1 flex justify-center items-center gap-x-16 max-lg:hidden">
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a href={items.href}
              className="text-lg text-[#6D6D6D] leading-normal hover:text-red-400"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block ">
        <img src={hamburger} alt="" width={25} height={25} className="cursor-pointer "/>
        </div>
        <div className="max-lg:hidden">
        <a href="#signup-page" className="text-[#6D6D6D] hover:text-red-400 leading-normal text-lg ">Signup/Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav
