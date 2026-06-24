import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../../config/axios';


const NuevoPassword = () => {

  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        
        setAlerta({
          msg: 'Coloca tu nuevo password'
        });
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
      }
    }
    comprobarToken();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: 'El password debe ser minimo de 6 caracteres',
        error: true,
      });
    };

    try {
      const url = `/veterianrios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });

      setAlerta({
        msg: data.msg
      });
      setPasswordModificado(true);
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
      <div className="animate-fade-in-up">
          <h1 className="text-indigo-600 font-black text-5xl md:text-6xl leading-tight">
            Reestablece tu password y no pierdas acceso a <span className="text-black">tus Pacientes</span>
          </h1>
      </div>

      <div className="card-hover shadow-lg px-8 py-10 rounded-xl bg-white">
      
        { msg && <Alerta alerta={alerta} />}
        
        { tokenValido && (
        <>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
              Nuevo Password
              </label>
              <input type="password" className="input-focus border w-full p-3 mt-3 bg-gray-50 rounded-xl" placeholder="Tu nuevo password"
            value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <input type="submit" value="Guardar nuevo password" className="btn-hover bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
            hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
          </form>

        
        </>
        )}

        {passwordModificado && <Link to="/" className="link-hover block text-center my-5 text-gray-500">Iniciar sesión</Link>}

      </div>
    </>
  )
};

export default NuevoPassword;
        
         
          
        

