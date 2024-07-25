import { Navbar } from "@/components/Navbar";
import { faCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center h-screen">
        {/* sidebar */}
        <div className="w-2/6 md:w-1/6 box-border sticky top-0">
          <div className="p-2">
            <h1 className="text-center font-bold text-foreground line-">Belajar HTML untuk pemula hingga mahir</h1>
          </div>
          <div className="border py-3 px-3 text-sm font-medium text-white bg-foreground items-center flex">
            <h3>Modul 1</h3>
            <FontAwesomeIcon icon={faCircle} className="text-yellow-500 ml-2 absolute right-4" />
          </div>
          <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
            <h3>Modul 2</h3>
            <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
          </div>
          <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
            <h3>Modul 2</h3>
            <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
          </div>
          <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
            <h3>Modul 2</h3>
            <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
          </div>
          <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
            <h3>Modul 2</h3>
            <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
          </div>
          <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
            <h3>Modul 2</h3>
            <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
          </div>
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