import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { links } from '../assets/constants';
import { logo } from '../assets';

const NavLinks = ({ handleClick }) => (
  <div className="mt-8">
    {links.map((link) => (
      <NavLink className="flex flex-row justify-start items-center ml-8 my-8 text-md font-medium text-[#e1d2ff] hover:text-[#FFF]"
        key={link.name}
        to={link.to}
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-8 h-8 mr-4"/>
        {link.name}
      </NavLink>
    ))}
  </div>
)
 
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-r from-[#3a0292] to-[#620dec]" >
        <img src={logo} alt="logo" className="w-full h-12 object-contain mt-8" />
        <NavLinks  />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ?
          <RiCloseLine className="w-8 h-8 text-[#FFF] mr-4" onClick={() => setMobileMenuOpen(false)} /> :
          <HiOutlineMenu className="w-8 h-8 text-[#FFF] mr-4" onClick={() => setMobileMenuOpen(true)} />
        }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#FFF]/70 to-[#331f5d] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-right-full'}`} >
        <img src={logo} alt="logo" className="w-full h-12 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
