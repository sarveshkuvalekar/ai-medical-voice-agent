// 'use client';

// import { UserButton } from '@clerk/nextjs';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const menuOptions = [
//   { id: 1, name: 'Home', path: '/dashboard' },
//   { id: 2, name: 'History', path: '/dashboard/history' },
//   { id: 3, name: 'Pricing', path: '/dashboard/billing' },
// ];

// function AppHeader() {
//   return (
//     <div className="flex items-center justify-between p-4 shadow px-6 md:px-20 bg-green-100 border rounded-2xl border-lime-500">

//       {/* ✅ Logo image */}
//       <div className="flex items-center">
//         <Image
//           src="/logo_1.png"
//           alt="Logo"
//           width={160}
//           height={50}
//           className="rounded-xl border object-contain"
//           priority
//         />
//       </div>

//       {/* ✅ Navigation menu */}
//       <div className="hidden md:flex gap-10 items-center">
//         {menuOptions.map((option, index) => (
//           <Link key={index} href={option.path}>
//             <div
//               key={option.id}
//               className="text-green-900 font-semibold text-lg px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-200"
//             >
//               {option.name}
//             </div>
//           </Link>
//         ))}
//       </div>


//       {/* ✅ Clerk user avatar */}
//       <UserButton />
//     </div>
//   );
// }

// export default AppHeader;

'use client';

import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // You'll need to install lucide-react

const menuOptions = [
  { id: 1, name: 'Home', path: '/dashboard' },
  { id: 2, name: 'History', path: '/dashboard/history' },
  { id: 3, name: 'Pricing', path: '/dashboard/billing' },
];

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 shadow px-6 md:px-20 bg-green-100 border rounded-2xl border-lime-500">
        {/* ✅ Logo image */}
        <div className="flex items-center">
          <Image
            src="/logo_1.png"
            alt="Logo"
            width={160}
            height={50}
            className="rounded-xl border object-contain"
            priority
          />
        </div>

        {/* ✅ Desktop Navigation menu */}
        <div className="hidden md:flex gap-10 items-center">
          {menuOptions.map((option, index) => (
            <Link key={index} href={option.path}>
              <div
                key={option.id}
                className="text-green-900 font-semibold text-lg px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-200"
              >
                {option.name}
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ Desktop User Button */}
        <div className="hidden md:block">
          <UserButton />
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <UserButton />
          <button
            onClick={toggleMenu}
            className="text-green-900 hover:text-green-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-100 border border-lime-500 rounded-xl mt-2 mx-4 md:hidden shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-2">
            {menuOptions.map((option, index) => (
              <Link key={index} href={option.path}>
                <div
                  onClick={handleMenuClick}
                  className="text-green-900 font-semibold text-lg px-4 py-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-green-200 border-b border-green-200 last:border-b-0"
                >
                  {option.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AppHeader;