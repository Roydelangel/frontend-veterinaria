import Formulario from '../components/Formulario';
import ListadoPacientes from '../components/ListadoPacientes';
import { useState } from 'react';


const AdministrarPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  

  return (
    <div className='flex flex-col md:flex-row gap-5'>
      <button 
      type='button' 
      className='bg-indigo-600 text-white font-bold uppercase mx-10 p-2 rounded-md mb-10 md:hidden '
      onClick={() => mostrarFormulario(!mostrarFormulario)}>
      {mostrarFormulario ? 'Ocultar formulario' : 'Mostrar formulario'}
      </button>
      
      <div className={`${mostrarFormulario ? 'block': 'hidden'} md:block w-1/2 lg:w-2/5`}>
        <Formulario />
      </div>

      <div className='w-1/2 lg:w-3/5'> 
        <ListadoPacientes />
      </div>
    
    </div>
  )
};

export default AdministrarPacientes;