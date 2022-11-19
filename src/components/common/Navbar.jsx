import { useState } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let linkStyleClasses = 'font-poppins font-medium cursor-pointer text-[14px] uppercase mr-10 last:mr-0 ';

  return (
    <nav className="w-full flex py-14 justify-between items-center navbar px-20">
      <div className="custom-shape-divider-top-1668835711">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1668836727">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      {/* <img src={logo} alt="metric" className="w-auto h-[48px] mr-2" /> */}
      <img src="https://via.placeholder.com/300x100" alt="metric" className="w-auto h-[48px] mr-2" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-primaryGreen bg-white rounded-2xl px-5 py-0.5' : `${linkStyleClasses}` + 'text-black'} key={index} >{nav.title}</NavLink>
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
              <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-primaryGreen bg-white rounded-2xl px-5 py-0.5' : `${linkStyleClasses}` + 'text-black'} key={index} >{nav.title}</NavLink>
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
