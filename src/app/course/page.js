import { Navbar } from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";

export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center h-screen relative">
        {/* sidebar */}
        <div className="w-1/6 m-4 sticky top-0">
          <div className="border-bottom  ">
            <div className="border-bottom">
              <h2 className="text-sm font-bold text-foreground">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold text-foreground">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold text-foreground">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">CSS</label>
                </li>
              </ul>
            </div>

            <div className="border-bottom mt-2">
              <h2 className="text-sm font-bold text-foreground">Kategori</h2>
              <ul>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Machine Learning</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">Competitive Programming</label>
                </li>
                <li className="mt-1 text-sm flex flex-column">
                  {/* add checkbo */}
                  <input type="checkbox" className="mr-1" id="kategori" />
                  <label for="kategori" className="text-xs">CSS</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="w-5/6 p-4">
          <div className="search">
            <div className="float flex items-center justify-between">
              <h1 className="font-semibold text-md">Kamu mencari "<span className="text-foreground">Machine Learning</span>"</h1>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSearch} className="text-foreground translate-x-5" height={15} width={15} />
                <input type="text" className="border-b-2 focus:outline-none focus:border-b-2 focus:border-sky-500 pl-6" />
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
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                  <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                </div>
              </div>
            </Link>

            <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
                  <p className="text-xs my-1">Est velit incididunt fugiat sint exercitation laboris mollit ut tempor.</p>
                </div>
              </div>
            </Link>

            <Link href="/course/detail">
              <div className="bg-white rounded-lg border transition ease-in delay-150 hover:-translate-y-1 hover:shadow-foreground duration-0 hover:duration-150">
                  <img src="https://via.placeholder.com/150" className="object-cover h-40 w-full rounded-t-lg" alt="Placeholder" />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground">Aute voluptate do anim minim sit.</h3>
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