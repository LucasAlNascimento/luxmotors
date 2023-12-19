import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function Header() {

    return (
        <header className="flex justify-between items-center w-full h-20 px-10 bg-gray-200 shadow-md">
            <div className="flex w-full max-w-7xl items-center m-auto">
                <img
                    src="./src/assets/logo-lux.png"
                    alt="Logo Luxmotors"
                    className="w-40"
                />
            </div>
            <div className="flex justify-between gap-6">
                <button className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", fontSize: "25px" }} />
                    <a className="font-medium">Entrar</a>
                </button>
                <button className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", fontSize: "25px" }} />
                </button>
            </div>
        </header>
    )
}

export default Header