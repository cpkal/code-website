import { redirect } from 'next/navigation'
import Link from "next/link";

export default function Register() {
  async function handleSubmit(formData) {
    "use server"
    // const form = new FormData(event.target);
    console.log(formData)
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    
    redirect("https://localhost:3000/auth/login");
  }
  
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="border w-11/12 md:w-1/3 mx-auto p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Register</h1>
        <form action={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" id="email" className="w-full border rounded-lg px-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input name="username" type="text" id="username" className="w-full border rounded-lg px-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" id="password" className="w-full border rounded-lg px-2" />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-foreground hover:bg-foreground w-full p-1 text-white rounded-full">Login</button>
          </div>
        </form>
				<Link href="/auth/login" className="text-xs float-right text-foreground font-medium">
					Sudah ada akun? klik di sini untuk login!
				</Link>
      </div>
    </div>
  );
}