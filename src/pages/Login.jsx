import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PosterDeco from '../components/PosterDeco';
import useAuth from '../hooks/useAuth';
import Alerta from '../components/Alerta';
import clienteAxios from '../../config/axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();

    if ( [email, password].includes('') ) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });

      return;
    };

    try {
      const { data } = await clienteAxios.post('/veterinarios/login', { email, password });

      localStorage.setItem('token', data.token);
      setAuth(data);
      
      navigate('/admin');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    };


  };

  const { msg } = alerta;
  
  return (
    <>
      <PosterDeco />

      <div className="flex flex-col gap-8">
        <div className="animate-fade-in-up">
          <h1 className="text-indigo-600 font-black text-5xl md:text-6xl leading-tight">
            Inicia Sesión y Administra tus <span className="text-black">Pacientes</span>
          </h1>
        </div>

        <div className="card-hover shadow-lg px-8 py-10 rounded-xl bg-white">

          { msg && <Alerta
            alerta={alerta}
          />}

          <form onSubmit={handleSubmit}>
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
              <input type="password" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Password"
                value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <input type="submit" value="Iniciar Sesion" className="btn-hover bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
          </form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link to="/registrar" className="link-hover block text-center my-5 text-gray-500">¿No tienes una cuenta? Regístrate</Link>
            <Link to="/olvide-password" className="link-hover block text-center my-5 text-gray-500">Olvide mi password</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Login;
