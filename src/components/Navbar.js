import Link from "next/link";
import Button from "./Button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import ProfileIcon from "./ProfileIcon";

export async function Navbar() {
  const session = await getServerSession();
  return (
    <nav className="px-4 py-3 shadow flex">
      {/* create navbar items consist of logo, search input, 3 link text and login and sign in button */}
      <div className="flex-1">
        <Link href="/" className="text-lg font-bold">Logo</Link>
      </div>
      <div className="flex-1">
        <input type="text" placeholder="Search" className="w-full px-2 py-1 border rounded" />
      </div>
      <div className="flex-1">
        <Link href="/course" className="px-2">Link 1</Link>
        <Link href="/course" className="px-2">Link 2</Link>
        <Link href="/course" className="px-2">Link 3</Link>
      </div>
      <ProfileIcon />
   
    </nav>
  );
}