import clienteAxios from "../../config/axios";
import Alerta from "../components/Alerta";
import PosterDeco from "../components/PosterDeco";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`;

          const { data } = await clienteAxios(url);
          setCuentaConfirmada(true);
          setAlerta({
            msg: data.msg
          })
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          });
        };

        setCargando(false);
    };

    confirmarCuenta();
  
    
  }, []);
  
  
  return (
    <>
      <PosterDeco />

      <div className="flex flex-col gap-8">
        <div className="animate-fade-in-up">
            <h1 className="text-indigo-600 font-black text-5xl md:text-6xl leading-tight">
             Confirma tu Cuenta y Comienza a Administrar <span className="text-black">tus Pacientes</span>
            </h1>
        </div>

        <div className="card-hover shadow-lg px-8 py-10 rounded-xl bg-white">
          {!cargando && <Alerta 
            alerta={alerta}
          />}

          {cuentaConfirmada && (
            <Link to="/" className="link-hover block text-center my-5 text-gray-500">Iniciar sesión</Link>
          )}
        </div>
      </div>
          
    </>
  );
};

export default ConfirmarCuenta;