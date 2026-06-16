import { Link } from "react-router-dom";
import PosterDeco from "../components/PosterDeco";

const OlvidePassword = () => {

  return (
    <>
      <PosterDeco />

      <div className="flex flex-col gap-8">
        <div className="animate-fade-in-up">
          <h1 className="text-indigo-600 font-black text-5xl md:text-6xl leading-tight">
            Recupera tu acceso y no pierdas <span className="text-black">tus Pacientes</span>
          </h1>
        </div>

        <div className="card-hover shadow-lg px-8 py-10 rounded-xl bg-white">
            <form>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Email
                </label>
                <input type="email" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro"/>
              </div>

              <input type="submit" value="Enviar email" className="btn-hover bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
                hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link to="/" className="link-hover block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/registrar" className="link-hover block text-center my-5 text-gray-500">¿No tienes una cuenta? Regístrate</Link>
            </nav>
        </div>
      </div>
    </>
  );
};

export default OlvidePassword;