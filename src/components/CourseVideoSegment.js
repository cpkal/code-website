import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CourseVideoSegment() {
  return(
    <div className="flex p-2 items-center border-b-2">
      <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
      <p className="text-sm ml-2">Pengenalan HTML 00:00</p>
      {/* add minute second video */}
    </div>
  );
}