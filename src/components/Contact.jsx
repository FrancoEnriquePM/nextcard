// URL de imagen placeholder para el componente.
import imagenContacto from "../assets/imagen_contacto.jpg";

const Contact = () => {
    return (
        // El fondo del gradiente se mantiene en la sección principal.
        <section id="contact" className="bg-gradient-to-r from-cyan-950 to-cyan-700 py-20 text-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Contenedor Principal: Usa GRID para dividir en dos columnas en pantallas grandes (lg) */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* 1. Columna de Imagen (Izquierda) */}
                    <div className="hidden lg:block">
                        <img
                            src={imagenContacto}
                            alt="Oficina de NextCard o imagen de contacto"
                            // Imagen con bordes redondeados y sombra
                            className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                        />
                    </div>

                    {/* 2. Columna de Título, Subtítulo y Formulario (Derecha) */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            ¿Listo para comenzar con NextCard?
                        </h2>
                        <p className="text-cyan-50 mb-10 lg:max-w-none max-w-lg mx-auto">
                            Transforma la manera en que tu empresa comparte y gestiona información profesional.
                        </p>

                        {/* Formulario centrado dentro de su columna */}
                        <form className="bg-white p-6 rounded-2xl shadow-lg text-gray-800 max-w-md mx-auto lg:mx-0">
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                            <textarea
                                placeholder="Mensaje o consulta"
                                className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                rows="3"
                            ></textarea>
                            <button className="bg-cyan-950 text-white w-full py-3 rounded-lg font-medium hover:bg-cyan-900 transition-all">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Contact;