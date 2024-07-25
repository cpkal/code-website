'use client'

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForgotUsername() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="border w-11/12 md:w-1/3 mx-auto p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Forgot Username</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
            <input name="username" type="username" id="username" className="w-full border rounded-lg px-2" autoComplete="off" />
          </div>
        
          <div className="mb-4">
            <button type="submit" className="bg-foreground hover:bg-foreground w-full p-1 text-white rounded-full">Lupa Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}