'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Button from "./Button";

export default function ProfileIcon() {
  const session = useSession();

  console.log(session)

  if(session.status === "unauthenticated") {
    return (
      <div className="flex-1">
        <Button isPrimary="true" src="/auth/login">Login</Button>
        <Button isPrimary="false" src="/auth/register">Register</Button>
      </div>
    );
  }
  
  return (
    <div className="flex-1">
      <div className="flex items-center bg" onClick={() => signOut()}>
        <img
          src="https://via.placeholder.com/150"
          className="rounded-full h-10 w-10 object-cover"
          alt="Profile"
        />
        <span className="ml-2">{session.data?.user?.name}</span>
      </div>
    </div>
  );
}