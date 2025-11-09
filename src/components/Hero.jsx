// 1. Importa la imagen al inicio del archivo
import heroImage from "../assets/nextcard-hero.webp";

const Hero = () => {
  return (
    <section
      className="relative h-screen text-left"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      <div className="absolute z-10 bottom-0 left-0 max-w-md p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Tarjetas Digitales que Conectan a tu Empresa con el Futuro
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
          Crea, comparte y gestiona{" "}
          <span className="text-accent font-semibold">NextCards</span>{" "}
          profesionales para tu equipo en segundos.
        </p>
        <div className="flex flex-col sm:flex-row justify-start gap-4">
          <button className="bg-cyan-900 hover:bg-cyan-950 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-xl shadow-accent/40">
            Comenzar ahora
          </button>
          <button className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 rounded-xl font-medium transition-all">
            Ver planes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
