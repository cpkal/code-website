import Banner from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="p-16">
        <div className="grid grid-cols-2 gap-3">
          <div>
            {session ? (
              <h1 className="text-2xl font-bold">Welcome, {session.user.email}</h1>
            ) : (
              <h1 className="text-2xl font-bold">Welcome, Guest</h1>
            )
            }
            <h2 className="text-2xl font-bold">Esse ipsum minim amet eu exercitation laboris.</h2>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor. Aliqua elit qui veniam duis nulla consequat qui. Et aliquip ea exercitation fugiat occaecat adipisicing. Elit nulla irure ex magna sint elit reprehenderit dolore enim laboris labore. In minim do do labore laborum elit dolor qui ullamco ea reprehenderit reprehenderit excepteur. Commodo nostrud ex esse ut amet dolore dolor.</p>
          </div>
          <div className="pl-24"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className="p-16 bg-gray-100">
        <div className="grid grid-cols-2 gap-3">
          <div className="pr-24"> 
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Esse ipsum minim amet eu exercitation laboris.</h2>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor. Aliqua elit qui veniam duis nulla consequat qui. Et aliquip ea exercitation fugiat occaecat adipisicing. Elit nulla irure ex magna sint elit reprehenderit dolore enim laboris labore. In minim do do labore laborum elit dolor qui ullamco ea reprehenderit reprehenderit excepteur. Commodo nostrud ex esse ut amet dolore dolor.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-24">
        <h2 className="text-2xl font-bold">Esse ipsum minim amet eu exercitation laboris.</h2>
        <div className="grid grid-cols-3 gap-4 px-24 py-4">
          {/* create 3 cards */}
          <div className="bg-white shadow rounded p-4">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
            <h3 className="text-lg font-bold mt-2">Card 1</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
            <h3 className="text-lg font-bold mt-2">Card 1</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full" alt="Placeholder" />
            <h3 className="text-lg font-bold mt-2">Card 1</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
        </div>
      </div>

      {/* create footer */}
      <footer className="p-4 bg-gray-800 text-white">
        <div className="flex">
          <div className="flex-1">
            <h3 className="text-lg font-bold">Logo</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Social Media</h3>
            <p className="text-sm mt-2">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p>&copy; 2024</p>
        </div>
      </footer>

    </main>
  );
}
