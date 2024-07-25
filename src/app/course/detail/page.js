import { Navbar } from "@/components/Navbar";
import { faArrowRight, faCircle, faHome, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Video from 'next-video';
import awesomeVideo from '/videos/get-started.mp4';
import Link from "next/link";


export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center ">
        {/* sidebar */}
        <div className="w-1/6 box-border sticky top-0">
          <div className="p-2 mt-4">
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

            <div className="text-sm my-3 border-b-2 pb-3 flex justify-between items-center">
              <div className="breadcrumb">
                <FontAwesomeIcon icon={faHome} height={15} width={15} /> / 
                Course / Belajar HTML untuk pemula hingga mahir / Modul 1
              </div>
            {/* create profile writer */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="ml-2">
                <h3 className="font-semibold text-xs">Nama Penulis</h3>
                <p className="text-xs">Pengembang Web</p>
              </div>
            </div>
          </div>
          
          
          <div className="flex">
            <div className="w-3/4 bg-sky-500 rounded-lg">
              <Video src={awesomeVideo} className="rounded-lg" />
            </div>
            {/* create timeline */}
            <div className="flex justify-between ml-2 w-1/4 overflow-scroll">
              <div className="p-4 border rounded-lg w-full">
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                <div className="flex p-2 items-center border-b-2">
                  <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
                  <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
                  {/* add minute second video */}
                </div>
                
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-lg mt-4">Ringkasan</h3>
          <p className="text-sm">Amet exercitation non ut nostrud duis culpa nulla mollit et consectetur pariatur. Dolore dolor enim consectetur sint amet et quis ullamco excepteur. Enim culpa voluptate est Lorem do. Mollit mollit elit reprehenderit occaecat sint reprehenderit in est sit elit dolor duis mollit. Voluptate sit cupidatat qui proident proident labore ea dolor pariatur minim. Quis tempor do sit sint.</p>
          {/* link to next modul */}
          <div className="flex justify-end mt-4">
            <Link href="/course/quiz" className="border-2 border-sky-400 text-sky-400 px-4 py-2 rounded-lg flex items-center hover:bg-dark-accent hover:text-on-dark-accent">
              <p>Modul Selanjutnya</p>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
	);
}