'use client'

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="h-screen flex flex-col justify-center">
      <div className="border w-11/12 md:w-1/3 mx-auto p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input name="username" type="username" id="username" className="w-full border rounded-lg px-2" autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" id="password" className="w-full border rounded-lg px-2" autoComplete="off" />
            {/* forgot password */}
            <Link href="/auth/forgot-password" className="text-xs text-foreground font-medium">
              Lupa password? klik di sini untuk reset
            </Link>
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-foreground hover:bg-foreground w-full p-1 text-white rounded-full">Login</button>
          </div>
        </form>
        <Link href="/auth/register" className="text-xs float-right text-foreground font-medium">
          Gapunya akun? klik di sini untuk daftar		
        </Link>
        <br/>
        {/* forgot username */}
        <Link href="/auth/forgot-username" className="text-xs text-foreground font-medium float-right">
          Lupa username? klik di sini untuk reset
        </Link>
        {/* or login with google, github */}
        <div className="mt-16">
          <button onClick={() => signIn("google")} className="bg-red-600 hover:bg-red-700 w-full p-1 text-white rounded-full">
            Google
          </button>
          <button onClick={() => signIn("github")} className="bg-black hover:bg-gray-800 w-full p-1 text-white rounded-full mt-2">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}