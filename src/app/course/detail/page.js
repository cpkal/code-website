import { Navbar } from "@/components/Navbar";
import { faArrowRight, faCircle, faHome, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Video from 'next-video';
import awesomeVideo from '/videos/get-started.mp4';
import Link from "next/link";
import CourseVideoWrapper from "@/components/CourseVideoWrapper";
import CourseModuleNavigation from "@/components/CourseModuleNavigation";
import Breadcrumb from "@/components/Breadcrumb";


export default function Course() {
	return (
		<>
      <Navbar />
      <div className="flex justify-center">
        {/* sidebar */}
        <div className="w-2/6 md:w-1/6 box-border sticky top-0">
          <div className="p-2 mt-4">
            <h1 className="text-center font-semibold">Belajar HTML untuk pemula hingga mahir</h1>
          </div>

          {/* active module */}
          <div className="border py-3 px-3 text-sm font-medium text-white bg-foreground items-center flex">
            <h3>Modul 1</h3>
            <FontAwesomeIcon icon={faCircle} className="text-yellow-500 ml-2 absolute right-4" />
          </div>
          
          <CourseModuleNavigation />
          <CourseModuleNavigation />
          <CourseModuleNavigation />
          <CourseModuleNavigation />
          
        </div>
        {/* main content */}
          <div className="w-4/6 md:w-5/6 p-4">

            {/* breacrumb and writer profile */}
            <div className="text-sm my-3 border-b-2 pb-3 flex justify-between items-center">
              
              <Breadcrumb />

              {/* create profile writer */}
              <div className="items-center hidden md:flex">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="ml-2">
                  <h3 className="font-semibold text-xs">Nama Penulis</h3>
                  <p className="text-xs">Pengembang Web</p>
                </div>
              </div>
            </div>
          
          <CourseVideoWrapper />

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