import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { links } from '../assets/constants';
import { logo } from '../assets';

const NavLinks = ({ handleCLick }) => (
  <div className="mt-8">
    {links.map((link) => (
      <NavLink className="flex flex-row justify-start items-center ml-8 my-8 text-md font-medium text-[#8C52FF] hover:text-[#FFF]"
        key={link.name}
        to={link.to}
        onClick={() => handleCLick && handleClick()}
      >
        <link.icon className="w-8 h-8 mr-4"/>
        {link.name}
      </NavLink>
    ))}
  </div>
)
 
const Sidebar = () => {
  const [mobileMenuOpen, setModileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1c1134]" >
        <img src={logo} alt="logo" className="w-full h-12 object-contain" />
        <NavLinks  />
      </div>
    </>
  );
};

export default Sidebar;
