// We no longer need to import 'React' in '.jsx' files
import { useState } from 'react';

import { Modal } from './';

import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '../assets/images/logo.png';

function HeaderItem({ title, classProps }) {
  return (
    // 'mx-...': margin in X axis
    <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
  );
}

function Header() {
  const [toggleMenu, setToggleMenu] = useState();
  const headers = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

  return (
    // 'md:...': set any attribute to medium devices
    // 'p-...': padding
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={Logo} alt="Logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {headers.map((item, index) => (
          <HeaderItem key={item + index} title={item} />
        ))}
        {/* 'py-...': top and bottom padding */}
        <li
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded cursor-pointer hover:bg-[#2546bd]"
          onClick={async () =>
            Modal.show({
              title: `Please install Metamask`,
              content: <p>Metamask in needed to run this application.</p>,
              cta: 'Go to webstore',
              resolver: () => 0,
            })
          }
        >
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-w1te md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          // 'z-10': z-index= 10
          // 'md:hidden': medium devices hidden
          // 'list-none': list style none
          // 'blue-glassmorphism': blue blur
          // '-right-2': right: -2
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {headers.map((item, index) => (
              <HeaderItem
                key={item + index}
                title={item}
                // 'my-2': margin
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
