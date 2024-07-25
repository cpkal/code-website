import Video from 'next-video';
import awesomeVideo from '/videos/get-started.mp4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import CourseVideoSegment from './CourseVideoSegment';


export default function CourseVideoWrapper() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 bg-sky-500 rounded-lg">
        <Video src={awesomeVideo} className="rounded-lg" />
      </div>
      {/* create timeline */}
        <div className="p-4 border rounded-lg mt-2 md:mt-0 ml-0 md:ml-2 w-full md:w-1/4 overflow-scroll">
          <CourseVideoSegment />
          <CourseVideoSegment />
          <CourseVideoSegment />
          <CourseVideoSegment />
          <CourseVideoSegment />
          <CourseVideoSegment />
          
        </div>
    </div>
  );
}