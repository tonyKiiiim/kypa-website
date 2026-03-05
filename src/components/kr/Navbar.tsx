'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from '@/components/en/LanguageSwitcher';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'

  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <nav style={{ backgroundColor: '#52b49b', background: 'linear-gradient(90deg, #52b49b 0%, #89ccbb 100%)'}} className="p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={withLocale('/')} className="flex items-center">
          <Image
            src="/images/kypa-logo.jpg"
            alt="Korea Youth Pickleball Association Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

{/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href={withLocale("/about")} className="hover:text-yellow-100 transition-colors duration-200">
            소개
          </Link>
          <Link href={withLocale("/history")} className="hover:text-yellow-100 transition-colors duration-200">
            연혁
          </Link>
          <Link href={withLocale("/news")} className="hover:text-yellow-100 transition-colors duration-200">
            소식
          </Link>
          <Link href={withLocale("/join-us")} className="hover:text-yellow-100 transition-colors duration-200">
            가입
          </Link>
          <Link href={withLocale("/contact")} className="hover:text-yellow-100 transition-colors duration-200">
            연락처
          </Link>
        </div>

        {/* Language Switcher (always visible on desktop, inside dropdown on mobile) */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4 text-lg font-medium">
          <Link href={withLocale('/about')} className="block hover:text-yellow-100" onClick={() => setOpen(false)}>소개</Link>
          <Link href={withLocale("/history")} className="block hover:text-yellow-100" onClick={() => setOpen(false)}>연혁</Link>
          <Link href={withLocale("/news")} className="block hover:text-yellow-100" onClick={() => setOpen(false)}>소식</Link>
          <Link href={withLocale("/join-us")} className="block hover:text-yellow-100" onClick={() => setOpen(false)}>가입</Link>
          <Link href={withLocale("/contact")} className="block hover:text-yellow-100" onClick={() => setOpen(false)}>연락처</Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
