import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { links } from '../assets/constants';
import { logo } from '../assets';

 
const Sidebar = () => {
  const [mobileMenuOpen, setModileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1c1134]" >
        <img src={logo} alt="logo" className="w-full h-12 object-contain" />
      </div>
    </>
  );
};

export default Sidebar;
