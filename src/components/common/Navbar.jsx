import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import * as rdd from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import themeLogo from '../../assets/img/logo.webp';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  let linkStyleClasses = `font-poppins cursor-pointer uppercase ${rdd.isMobile ? 'font-semibold text-[30px] mb-16 last:mb-0' : 'font-medium text-[14px] mr-10 last:mr-0'} `;

  return (
    <nav className="w-full flex py-8 md:py-14 justify-between items-center navbar px-7 md:px-20" aria-label="AppMenu">
      <div className="custom-shape-divider-top-1668835711">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1668836727">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <img src={themeLogo} alt="metric" className="w-auto h-[48px] mr-2" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1" role="submenu1">
        {navLinks.map((nav, index) => (
          <li className='px-5' key={index} role="submenu1item">
            <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} id={nav.id} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-linkBlack bg-white rounded-2xl px-5 py-0.5' : `${linkStyleClasses}` + 'text-black'} onClick={() => nav.subMenu ? setDropDown(!dropdown) : setDropDown(false)}>
              {nav.title}
              {
                nav.subMenu ? <FontAwesomeIcon className="ml-2" icon={dropdown ? faChevronUp : faChevronDown} /> : null
              }
            </NavLink>
            {
              nav.subMenu && dropdown ?
                <ul className="products-menu absolute shadow-xl bg-white rounded-xl p-4 mt-2 z-50" role="submenu2">
                  {
                    nav.subMenu.map((menu, menuIndex) => (
                      <li className="mb-3 last:mb-0 hover:text-primaryGreen w-full hover:cursor-pointer" key={menuIndex} role="submenu2item">
                        <NavLink to={menu.path} end={nav.path !== 'products' ? true : false} className="font-poppins w-full" onClick={() => setDropDown(!dropdown)} >{menu.title}</NavLink>
                      </li>
                    ))
                  }
                </ul> : null
            }
          </li>
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

        <div className={`${!toggle ? "hidden" : "flex"} px-3 py-6 bg-white/80 shadow-lg absolute top-20 right-0 my-5 w-full h-[89%] min-w-[140px] rounded-xl z-40 sidebar`}>
          <ul className="list-none flex justify-center items-center flex-1 flex-col" role="menutoggle">
            {navLinks.map((nav, index) => (
              <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-white bg-primaryGreen rounded-4xl px-10 py-0.5' : `${linkStyleClasses}` + 'text-black'} key={index} onClick={() => setToggle(!toggle)}>
                {nav.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

