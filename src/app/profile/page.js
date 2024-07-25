// 'use client'

import { Navbar } from "@/components/Navbar";

// import { useRouter } from "next/router";

export default function Profile() {
  // const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="px-24 py-4 flex">
        <div className="w-64 border rounded-lg relative">
          <div className="p-5">
            <h2 className="text-xl font-bold">My Profile</h2>
            <ul className="mt-5 space-y-2">
              {/* create items */}
              <li className="hover:bg-gray-700 p-2 rounded">Profile</li>
              <li className="hover:bg-gray-700 p-2 rounded">My Courses</li>
              <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
            </ul>
          </div>
          {/* create logout */}
          <div className="">
            <button className="w-full bg-red-500 text-white p-2 rounded-b-lg">Logout</button>
          </div>
        </div>
        <div className="flex-1 ml-12 border rounded-lg p-5">
          <h1 className="text-2xl font-bold">My Profile</h1>
          {/* Add your main profile content here */}
        </div>
      </div>
    </>
  );
}
