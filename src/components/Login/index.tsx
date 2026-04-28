import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-24 min-h-screen flex items-center justify-center px-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
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

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Não tem conta?{" "}
					<Link to="/signup">
						<span className="text-blue-600 cursor-pointer hover:underline">
							Cadastre-se
						</span>
					</Link>
        </p>
      </div>
    </div>
  );
}