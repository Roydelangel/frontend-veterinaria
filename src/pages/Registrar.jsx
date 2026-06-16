import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import PosterDeco from "../components/PosterDeco";
import clienteAxios from "../../config/axios";

const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({msg: 'Hay campos vacios', error: true});

      return;
    };

    if (password !== repetirPassword) {
      setAlerta({msg: 'Los Password no son iguales', error: true});

      return;
    };

    if (password < 6) {
      setAlerta({msg: 'El Password es muy corto, agrega minimo 6 caracteres', error: true});

      return;
    };

    setAlerta({});

    // Crear el usuario en la api
    try {
      await clienteAxios.post('/veterinarios', {nombre, email, password});
      setAlerta({ 
        msg: 'Creado correctamente, revisa tu email',
        error: false});
    } catch (error) {
      setAlerta({
        error: true,
        msg: error.response.data.msg
      })
    };
    
  };

  const { msg } = alerta;

  return (
    <>
      <PosterDeco />

      <div className="flex flex-col gap-8">
        <div className="animate-fade-in-up">
          <h1 className="text-indigo-600 font-black text-5xl md:text-6xl leading-tight">
            Crea tu Cuenta y Administra <span className="text-black">tus Pacientes</span>
          </h1>
        </div>

        <div className="card-hover shadow-lg px-8 py-10 rounded-xl bg-white">

            { msg && <Alerta 
              alerta={alerta}
            />}
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre
                </label>
                <input type="text" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu nombre" 
                value={nombre} onChange={e => setNombre(e.target.value)}/>
              </div>
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Email
                </label>
                <input type="email" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Email de registro" 
                value={email} onChange={e => setEmail(e.target.value)}/>
                
              </div>
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Password
                </label>
                <input type="password" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu password"
                value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Repetir Password
                </label>
                <input type="password" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Repite tu password"
                value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)}/>
              </div>

              <input type="submit" value="Crear cuenta" className="btn-hover bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
                hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link to="/" className="link-hover block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/olvide-password" className="link-hover block text-center my-5 text-gray-500">Olvide mi password</Link>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Registrar;