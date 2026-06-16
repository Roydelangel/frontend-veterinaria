const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} 
    bg-gradient-to-r rounded-xl text-white text-2xl text-center p-3 uppercase font-bold mb-10 animate-fade-in shadow-lg`}>{alerta.msg}</div>
  );
};

export default Alerta;