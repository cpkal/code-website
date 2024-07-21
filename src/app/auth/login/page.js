import Link from "next/link";

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: form,
  });
  const data = await response.json();
  console.log(data);
}

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 px-24">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
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