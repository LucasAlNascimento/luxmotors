import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { loginUser, logoutUser } from '../../redux/user/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHeart } from '@fortawesome/free-regular-svg-icons'


function Header() {

    const currentUser = useSelector((state: RootState) => state.userReducer.currentUser);
    const dispatch = useDispatch();

    console.log(currentUser);

    const handleLoginClick = () => {
        dispatch(loginUser({name: "Lucas", email: "lucas@email.com"}));
    };

    const handleLogoutClick = () => {
        dispatch(logoutUser());
    };

    return (
        <header className="flex z-50 justify-between items-center w-full h-20 px-5 bg-gray-200 shadow-md md:px-11">
            <div className="flex w-full items-center m-auto">
                <Link to="/">
                    <img
                        src="./src/assets/logolux.svg"
                        alt="Logo Luxmotors"
                        className="w-44 cursor-pointer"
                    />
                </Link>
            </div>
            <div className="flex justify-between gap-6">
                {currentUser ? (
                    <button className="flex items-center justify-center gap-2" onClick={handleLogoutClick}>
                        <FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", fontSize: "25px" }} />
                        <a className="font-fabrikatMedium mt-[2px]">Sair</a>
                    </button>
                ) : (
                    <button className="flex items-center justify-center gap-2" onClick={handleLoginClick}>
                        <FontAwesomeIcon icon={faCircleUser} style={{ color: "#000000", fontSize: "25px" }} />
                        <a className="font-fabrikatMedium mt-[2px]">Entrar</a>
                    </button>
                )}
                <button className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", fontSize: "25px" }} />
                </button>
            </div>
        </header>
    )
}

export default Header