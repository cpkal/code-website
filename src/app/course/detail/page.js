import { Navbar } from "@/components/Navbar";

export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center h-screen">
        {/* sidebar */}
        <div className="w-1/6 border sticky top-0">
          <div className="border bg-gray-200 py-3 px-3">Modul 1</div>
          <div className="border py-3 px-3">Modul 2</div>
          <div className="border py-3 px-3">Quiz 1</div>
          <div className="border py-3 px-3">Modul 3</div>
        </div>
        {/* main content */}
        <div className="w-5/6 p-4">
        <video className="bg-white shadow rounded mx-auto h-50 w-3/4" controls></video>
        <h3 className="font-semibold text-md">Ringkasan</h3>
        <p className="text-xs">Amet exercitation non ut nostrud duis culpa nulla mollit et consectetur pariatur. Dolore dolor enim consectetur sint amet et quis ullamco excepteur. Enim culpa voluptate est Lorem do. Mollit mollit elit reprehenderit occaecat sint reprehenderit in est sit elit dolor duis mollit. Voluptate sit cupidatat qui proident proident labore ea dolor pariatur minim. Quis tempor do sit sint.</p>
          
        <div className="float-right mt-3 w-full flex">
          <button className="bg-white shadow rounded p-1 w-1/2 mx-2 hover:bg-orange-200">Prev</button>
          <button className="bg-white shadow rounded p-1 w-1/2 mx-2 hover:bg-orange-200">Next</button>
        </div>
        </div>
      </div>
    </>
	);
}