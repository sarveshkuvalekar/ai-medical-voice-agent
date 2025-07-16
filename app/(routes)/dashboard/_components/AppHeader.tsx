'use client';

import { UserButton } from '@clerk/nextjs';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuOptions = [
  { id: 1, name: 'Home', path: '/dashboard' },
  { id: 2, name: 'History', path: '/dashboard/history' },
  { id: 3, name: 'Pricing', path: '/dashboard/billing' },
];

function AppHeader() {
  return (
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

      {/* ✅ Navigation menu */}
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


      {/* ✅ Clerk user avatar */}
      <UserButton />
    </div>
  );
}

export default AppHeader;
