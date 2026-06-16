const FloatingPaw = ({ className, delay }) => (
  <svg className={`absolute ${className}`} style={{ animationDelay: delay }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="22" cy="10" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="7" cy="20" r="3.5" fill="currentColor" opacity="0.6"/>
    <circle cx="25" cy="20" r="3.5" fill="currentColor" opacity="0.6"/>
    <ellipse cx="16" cy="22" rx="7" ry="5.5" fill="currentColor" opacity="0.6"/>
  </svg>
);

const PosterDeco = () => {
  return (
    <div className="relative hidden md:flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 poster-gradient rounded-3xl opacity-90" />

      <div className="absolute inset-0 bg-grid-pattern rounded-3xl opacity-20" />

      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      <FloatingPaw className="text-white/20 w-8 h-8 top-[12%] right-[15%] animate-float" />
      <FloatingPaw className="text-white/20 w-6 h-6 bottom-[20%] left-[12%] animate-float-delayed" />
      <FloatingPaw className="text-white/20 w-7 h-7 top-[35%] left-[8%] animate-float-slow" />
      <FloatingPaw className="text-white/20 w-5 h-5 bottom-[35%] right-[10%] animate-float" />

      <div className="relative z-10 flex flex-col items-center px-12 text-center">
        <div className="mb-8 animate-fade-in">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            <circle cx="60" cy="60" r="56" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2" />
            <circle cx="60" cy="60" r="44" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
            <path d="M60 38C58 38 48 44 48 54C48 62 56 70 60 74C64 70 72 62 72 54C72 44 62 38 60 38Z" fill="white" fillOpacity="0.9" />
            <path d="M48 52C42 50 36 54 36 60C36 64 40 68 48 66" fill="white" fillOpacity="0.7" />
            <path d="M72 52C78 50 84 54 84 60C84 64 80 68 72 66" fill="white" fillOpacity="0.7" />
            <path d="M52 72C50 80 54 86 60 86C66 86 70 80 68 72" fill="white" fillOpacity="0.8" />
          </svg>
        </div>

        <div className="backdrop-blur-sm bg-white/10 rounded-2xl px-8 py-6 border border-white/20 animate-fade-in-up">
          <h2 className="text-white text-3xl font-bold leading-tight">
            Cuidado y <br />
            <span className="text-indigo-200">Bienestar Animal</span>
          </h2>
          <p className="text-white/80 mt-3 text-sm leading-relaxed">
            Gestiona las consultas, tratamientos y el historial completo de tus pacientes con facilidad.
          </p>
        </div>

        <div className="mt-8 flex gap-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="w-2 h-2 rounded-full bg-white/60 animate-float" />
          <div className="w-2 h-2 rounded-full bg-white/40 animate-float-delayed" />
          <div className="w-2 h-2 rounded-full bg-white/20 animate-float-slow" />
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 opacity-30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="animate-float">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="animate-float-delayed">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="animate-float-slow">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PosterDeco;