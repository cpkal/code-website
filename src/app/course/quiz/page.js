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
          {/* create quiz question and options and add style on it */}
          <div className="border bg-white shadow rounded p-4 relative">
            <h3 className="font-semibold text-lg">Question 1</h3>
            <p className="text-sm">What is the capital of Indonesia?</p>
            <div className="mt-2">
              <input type="radio" name="answer" id="answer" />
              <label for="answer" className="ml-2">Jakarta</label>
            </div>
            <div className="mt-2">
              <input type="radio" name="answer" id="answer" />
              <label for="answer" className="ml-2">Bandung</label>
            </div>
            <div className="mt-2">
              <input type="radio" name="answer" id="answer" />
              <label for="answer" className="ml-2">Bali</label>
            </div>
            <div className="mt-2">
              <input type="radio" name="answer" id="answer" />
              <label for="answer" className="ml-2">Surabaya</label>
            </div>
            <button className="relative right-0  m-4">Next</button>
          </div>
        </div>
      </div>
    </>
	);
}