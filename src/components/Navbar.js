'use client'

import Link from "next/link";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <>
      <nav className="px-3 py-1 shadow flex items-center sticky top-0 bg-background z-50">
        {/* create navbar items consist of logo, search input, 3 link text and login and sign in button */}
        <div className="flex-1">
          <Link href="/" className="text-lg font-bold text-foreground">Logo</Link>
        </div>
        <div className="flex-1 hidden md:inline-block">
          <SearchBar />
        </div>
        <div className="flex-auto hidden md:inline-block px-2 text-sm font-medium">
          <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 1</Link>
          <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 2</Link>
          <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 3</Link>
        </div>
        <ProfileIcon />
        {/* add fa bar */}
        <div className="md:hidden">
          <button onClick={() => setShowNavMenu(!showNavMenu)}>
            <FontAwesomeIcon icon={faBars} className="text-foreground" />
          </button>
        </div>
        
      </nav>

      {showNavMenu && (
          <div className="w-full sticky top-9 bg-white">
            <ul>
              <li className="text-sm p-2 hover:bg-accent hover:text-white">
                <Link href="/course">Link 1</Link>
              </li>
              <li className="text-sm p-2 hover:bg-accent hover:text-white">
                <Link href="/course">Link 2</Link>
              </li>
              <li className="text-sm p-2 hover:bg-accent hover:text-white">
                <Link href="/course">Link 3</Link>
              </li>
              <li className="text-sm p-2 hover:bg-accent hover:text-white">
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        )}
    </>
  );
}