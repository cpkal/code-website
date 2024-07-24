import Link from "next/link";
import Button from "./Button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";
import SearchBar from "./SearchBar";

export async function Navbar() {
  const session = await getServerSession();


  return (
    <nav className="px-3 py-1 shadow flex items-center">
      {/* create navbar items consist of logo, search input, 3 link text and login and sign in button */}
      <div className="flex-1">
        <Link href="/" className="text-lg font-bold text-foreground">Logo</Link>
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="flex-1 px-2 text-sm font-medium">
        <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 1</Link>
        <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 2</Link>
        <Link href="/course" className="px-2 text-foreground hover:text-[--dark-accent]">Link 3</Link>
      </div>
      <ProfileIcon />
   
    </nav>
  );
}