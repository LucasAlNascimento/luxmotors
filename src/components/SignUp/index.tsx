import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/auth";
import { toast } from "sonner";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warning("As senhas não coincidem");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        nome: name,
        email,
        senha: password,
        isAdmin: false,
      };

      await createUser(payload);
      toast.success("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-24 min-h-screen flex items-center justify-center px-10">
      <div className="w-full max-w-sm bg-gray-200 border border-gray-300/60 shadow-md p-10 flex flex-col gap-10">

        <div className="flex flex-col gap-2 border-b border-gray-300/60 pb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Luxmotors</span>
          <h1 className="text-4xl font-light tracking-tight text-gray-900">Criar conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="bg-transparent border-b border-gray-400/50 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="bg-transparent border-b border-gray-400/50 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-gray-400/50 py-2 pr-8 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Confirmar senha</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-gray-400/50 py-2 pr-8 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors duration-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 h-12 w-full bg-black text-white text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Aguarde..." : "Criar conta"}
          </button>
        </form>

        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 text-center">
          Já tem conta?{" "}
          <Link
            to="/login"
            className="text-gray-900 hover:text-gray-600 transition-colors duration-300"
          >
            Entrar
          </Link>
        </p>

      </div>
    </div>
  );
}