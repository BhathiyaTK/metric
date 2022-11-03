import { useState } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let linkStyleClasses = 'font-poppins font-medium cursor-pointer text-[15px] uppercase mr-10 last:mr-0 ';

  return (
    <nav className="w-full flex py-14 justify-between items-center navbar px-20">
      {/* <img src={logo} alt="metric" className="w-auto h-[48px] mr-2" /> */}
      <img src="https://via.placeholder.com/300x100" alt="metric" className="w-auto h-[48px] mr-2" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-primaryGreen' : `${linkStyleClasses}` + 'text-black'} key={index} >{nav.title}</NavLink>
          // <NavigationLink to={nav.path} title={nav.title} index={index} key={index} />
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-primaryGreen' : `${linkStyleClasses}` + 'text-black'} key={index} >{nav.title}</NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// function NavigationLink({ to, title, index, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   let isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li
//       key={index}
//       className={`font-poppins font-medium cursor-pointer text-[15px] uppercase ${isActive ? "text-primaryGreen" : "text-black"
//         } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//     >
//       <Link to={to} key={index}>{title}</Link>
//     </li>
//   );
// }

export default Navbar;
