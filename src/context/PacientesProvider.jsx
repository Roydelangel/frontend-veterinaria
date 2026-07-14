import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';

const PacientesContext = createContext();

export const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
      const obtenerPacientes = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await clienteAxios('/pacientes', config);
            setPacientes(data);
        } catch (error) {
            console.log(error);            
        };
      };

      obtenerPacientes();
    }, []);
    

    const guardarPaciente = async (paciente) => {

        const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
        };

        if (paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);

                const pacienteActualizado = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState);
                setPacientes(pacienteActualizado);

            } catch (error) {
                console.log(error);
            }
        } else {
            try {
            const token = localStorage.getItem('token');

            const { data } = await clienteAxios.post('/pacientes', paciente, config);

            const { createdAt, updateAt, __v, ...pacienteAlmacenado} = data;
            setPacientes([pacienteAlmacenado, ...pacientes]);
            } catch (error) {
            console.log(error);
            };
        };

        
    };

    const setEdicion = (paciente) => {
        setPaciente(paciente);
    };

    const eliminarPaciente = async id => {
        const confirmar = confirm('Deseas eliminar un paciente?');

        if (confirmar) {
            try {
                const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await clienteAxios.delete(`/pacientes/${id}`, config);

            const pacientesActualizados = pacientes.filter(pacientesSate => pacientesSate._id !== id);
            setPacientes(pacientesActualizados);
            
            } catch (error) {
                console.log(error);
                
            };
        };
    };

    return (
        <PacientesContext.Provider
        value={{
            eliminarPaciente,
            guardarPaciente,
            paciente,
            pacientes,
            setEdicion,
        }}>

        { children }
        </PacientesContext.Provider>
    )
};



export default PacientesContext;