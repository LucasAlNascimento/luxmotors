import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../../components/Login";

export default function LoginContainer() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <Login />
      <Footer />
    </main>
  );
}
