import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Breadcrumb() {
    return(
      <div className="breadcrumb text-xs md:text-lg">
        <FontAwesomeIcon icon={faHome} height={15} width={15} /> / 
        Course / Belajar HTML untuk pemula hingga mahir / Modul 1
      </div>
    )
}