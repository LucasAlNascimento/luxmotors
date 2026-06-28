import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout, getUsuarioLogado } from "../../services/auth";

const navItemClass = "text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300";
const Divider = () => <div className="w-px h-4 bg-gray-400/60" />;

export default function Header() {
  const [logado, setLogado] = useState(isAuthenticated());
  const usuario = getUsuarioLogado();

  const usuarioLogado = logado && usuario;
  const primeiroNome = usuario?.nome?.split(" ")[0] ?? "Usuário";

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    setLogado(false);
    navigate("/login");
  }

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-200 p-5 shadow-md md:px-11">
      <div className="flex w-full items-center m-auto">
        <Link to="/" className="py-2">
          <img
            src="/assets/logos/logolux.svg"
            alt="Logo Luxmotors"
            className="w-44 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        {usuarioLogado ? (
          <>
            <button onClick={handleLogout} className={navItemClass}>
              Sair
            </button>

            <Divider />

            <button className={navItemClass}>
              Favoritos
            </button>

            <Divider />

            <span className="whitespace-nowrap text-[10px] tracking-[0.2em] uppercase text-gray-500">
              Olá, {primeiroNome}
            </span>
          </>
        ) : (
          <>
            <Link to="/login" className={navItemClass}>
              Entrar
            </Link>

            <Divider />

            <Link to="/register" className={navItemClass}>
              Cadastrar
            </Link>
          </>
        )}
      </div>
    </header>
  );
}