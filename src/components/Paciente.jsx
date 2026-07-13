import usePacientes from '../hooks/usePacientes';

const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes();

    const { email, fecha, nombre, propietario, sintomas, _id} = paciente;

    const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);

      return new Intl.DateTimeFormat('es-ES', { dateStyle: 'long'}).format(nuevaFecha);
    };

  return (
    <div className='mx-5 my-10 bg-white shadow-md py-10 px-5 rounded-xl'>
        <p className='font-bold uppercase text-gray-500'>Nombre: <span className='font-normal normal-case my-2'>{nombre}</span></p>
        
        <p className='font-bold uppercase text-gray-500'>Propietario: <span className='font-normal normal-case my-2'>{propietario}</span></p>
        
        <p className='font-bold uppercase text-gray-500'>Email: <span className='font-normal normal-case my-2'>{email}</span></p>
        
        <p className='font-bold uppercase text-gray-500'>Fecha de Alta: <span className='font-normal normal-case my-2'>{formatearFecha(fecha)}</span></p>
        
        <p className='font-bold uppercase text-gray-500'>Sintomas: <span className='font-normal normal-case my-2'>{sintomas}</span></p>   

        <div className='justify-between flex my-5'> 
          <button 
          type='button' 
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={() => setEdicion(paciente)}>
          Editar</button>

          <button 
          type='button' 
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          onClick={() => eliminarPaciente(_id)}>
          Eliminar</button>
        </div>
    </div>
  );
};

export default Paciente;