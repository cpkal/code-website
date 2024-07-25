import { Navbar } from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowsLeftRight, faSearch, faSort } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import CourseSortByTime from "@/components/CourseSortByTime";
import CourseFilterByCategory from "@/components/CourseFilterByCategory";
// import { useState } from "react";

export default function Course() {
  // const [showFilterSidebar, setShowFilterSidebar] = useState(false);

	return (
		<>
      <Navbar />
      <div className="flex justify-center h-screen relative">

        {/* sidebar */}
        <div className="hidden md:block w-1/6 m-4 sticky top-0">
          <CourseFilterByCategory />
          <CourseFilterByCategory />
          <CourseFilterByCategory />
          <CourseFilterByCategory />
          <CourseFilterByCategory />
        </div>

        {/* main content */}
        <div className="w-full md:w-5/6 p-4">
          <div className="float flex items-center justify-between">
            <h1 className="font-semibold text-md">
              Kamu mencari "<span className="text-foreground">Machine Learning</span>"
            </h1>
            <div className="flex items-center">
              <CourseSortByTime />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>

        {/* add button to center left of the screen */}
{/*       
       <div className="h-10 w-10 p-2 rounded-r-full bg-dark-accent hover:bg-dark-accent/2 text-on-dark-accent fixed top-1/3 l-1/2 hover:cursor-pointer" onClick={() => setShowFilterSidebar(!showFilterSidebar)}>
        <p>K</p>
       </div> */}
     
    </>
	);
}