import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center h-screen relative">
        {/* sidebar */}
        <div className="w-1/6 m-4 sticky top-0">
          <div className="border-bottom  ">
            <h1 className="text-lg font-bold py-2">Filter by</h1>
            <div className="border-bottom">
              <h2 className="text-sm font-bold">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori">CSS</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="w-5/6 p-4">
          <div className="search">
            <div className="float flex items-center justify-between">
              <h1 className="font-semibold text-md">Kamu mencari "Machine Learning"</h1>
              <div className="">
                <input type="text" className="border-accent rounded" />
                {/* create dropdown filter */}
                <select className="border-accent rounded ml-1">
                  <option value="1">Filter by</option>
                  <option value="2">Newest</option>
                  <option value="3">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {/* cards */}
            {/* add transition to card class */}
            <Link href="/course/detail">
              <div className="bg-white shadow rounded border transition hover:ease-in duration-300">
                <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded" alt="Placeholder" />
                <div className="p-2">
                  <h3 className="text-sm font-semibold mt-2">Aute voluptate do anim minim sit.</h3>
                  <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                </div>
              </div>
            </Link>

            
           
          </div>
        </div>
      </div>
    </>
	);
}