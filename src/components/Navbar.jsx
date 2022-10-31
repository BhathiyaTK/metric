import { useState } from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar px-20 absolute">
      {/* <img src={logo} alt="metric" className="w-auto h-[48px] mr-2" /> */}
      <img src="https://via.placeholder.com/300x100" alt="metric" className="w-auto h-[48px] mr-2" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink to={nav.path} navKey={nav.id} title={nav.title} index={index} />
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
              <NavLink to={nav.path} key={nav.id} title={nav.title} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

function NavLink({ to, navKey, title, index, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      key={navKey}
      className={`font-poppins font-medium cursor-pointer text-[15px] uppercase ${isActive ? "text-primaryGreen" : "text-black"
        } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
    >
      <Link to={to}>{title}</Link>
    </li>
  );
}

export default Navbar;
