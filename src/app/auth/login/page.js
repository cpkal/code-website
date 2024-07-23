'use client'

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);  
    console.log(form.get('password'))
    console.log(form.get('username'))
    const res = await signIn("credentials", {
      username: form.get("username"),
      password: form.get("password"),
      redirect: false,
    });

    console.log(res);

    if(res) {
      // redirect using userouter
      router.push("/");
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 px-24">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input name="username" type="username" id="username" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" id="password" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
          </div>
        </form>
				<Link href="/auth/register">
					Gapunya akun? klik di sini untuk daftar		
				</Link>
      </div>
			<div className="w-1/2">
				<img src="https://via.placeholder.com/150" className="object-cover h-screen w-screen" alt="Placeholder" />
			</div>
    </div>
  );
}