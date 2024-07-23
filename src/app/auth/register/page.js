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
    <div className="flex justify-center items-center h-screen">
			<div className="w-1/2">
				<img src="https://via.placeholder.com/150" className="object-cover h-screen w-screen" alt="Placeholder" />
			</div>
      <div className="w-1/2 px-24">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form action={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" id="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input name="username" type="text" id="username" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" id="password" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
          </div>
        </form>
				<Link href="/auth/login">
					Sudah ada akun? klik di sini untuk login!
				</Link>
      </div>
    </div>
  );
}