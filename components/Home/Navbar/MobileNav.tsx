import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  // Handle nav link click: close sidebar and manually scroll if anchor link
  const handleNavClick = (url: string) => {
    closeNav();

    if (url.startsWith('#')) {
      const id = url.slice(1);
      const element = document.getElementById(id);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 
        z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* Nav links */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform 
        transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 
        z-[100050] right-0`}
      >
        {NavLinks.map((link) => (
          <div 
            key={link.id} 
            onClick={() => handleNavClick(link.url)} 
            className="cursor-pointer"
          >
            <Link href={link.url}>
              <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                {link.label}
              </p>
            </Link>
          </div>
        ))}

        {/* Close icon */}
        <CgClose 
          onClick={closeNav} 
          className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 cursor-pointer' 
        />
      </div>
    </div>
  );
};

export default MobileNav;
