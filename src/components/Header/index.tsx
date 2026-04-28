import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="flex fixed top-0 z-50 justify-between items-center w-full p-5 bg-gray-200 shadow-md md:px-11">
      <div className="flex w-full items-center m-auto">
        <Link to="/" className="py-2">
          <img src="/assets/logos/logolux.svg" alt="Logo Luxmotors" className="w-44 cursor-pointer" />
        </Link>
      </div>
      <div className="flex justify-between gap-6">
				<Link to="/login" className="flex items-center gap-2 font-medium py-2">
					<FontAwesomeIcon
						icon={faCircleUser}
						style={{ color: "#000000", fontSize: "25px" }}
					/>
					<span className="mt-[2px]">Entrar</span>
				</Link>

        <button className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#000000", fontSize: "25px" }}
          />
        </button>
      </div>
    </header>
  );
}
