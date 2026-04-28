import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/auth";
import { toast } from "react-toastify";

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
				isAdmin: false
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
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-2xl font-semibold text-center mb-6">
          Criar conta
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Senha</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Confirmar senha</label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
						type="submit"
						disabled={loading}
						className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
					>
						{loading ? "Criando..." : "Criar conta"}
					</button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Já tem conta?{" "}
					<Link to="/login">
						<span className="text-blue-600 cursor-pointer hover:underline">
							Entrar
						</span>
					</Link>
        </p>
      </div>
    </div>
  );
}