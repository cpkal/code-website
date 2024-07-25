'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Button from "./Button";
import Link from "next/link";

export default function ProfileIcon() {
  const session = useSession();
  const [isShowSignout, setIsShowSignout] = useState(false);

  console.log(session)

  if(session.status === "unauthenticated") {
    return (
      <div className="flex-1">
        <div className="flex items-center float-right p-1">
          <Button isPrimary="true" src="/auth/login">Login</Button>
          <Button isPrimary="false" src="/auth/register">Register</Button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex-1">
        <div className="flex items-center float-right p-1" onClick={() => setIsShowSignout(!isShowSignout)}>
          <span className="mr-2">{session.data?.user?.name}</span>
          <img
            src="https://via.placeholder.com/150"
            className="rounded-full h-8 w-8 object-cover"
            alt="Profile"
          />
        </div>
      </div>
      {isShowSignout && (
      <div className="absolute right-0 top-14 bg-white border rounded-lg shadow-md">
        <ul>
          <li className="text-sm p-2 hover:bg-accent hover:text-white">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="text-sm p-2 hover:bg-accent hover:text-gray-600 hover:cursor-pointer" onClick={() => signOut()}>Sign Out</li>
        </ul>
      </div>
      )}
    </>
  );
}