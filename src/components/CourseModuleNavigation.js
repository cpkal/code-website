import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CourseModuleNavigation() {
  return(
    <div className="border py-3 px-3 text-sm font-medium items-center flex bg-gray-100">
      <h3>Modul 2</h3>
      <FontAwesomeIcon icon={faLock} className="text-black-500 ml-2 absolute right-4" />
    </div>
  )
}