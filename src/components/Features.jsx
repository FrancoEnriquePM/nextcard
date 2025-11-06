// Usaremos la paleta de colores 'primary' (azul oscuro) y 'accent' (amarillo)

// Importa íconos (ejemplo usando Heroicons/Lucide, si los tienes instalados)
const IconMonitor = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l2-2 2 2v13M9 19h6a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
);
const IconSupport = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const IconAutomation = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);

const Features = () => {
    const items = [
        {
            title: "Monitoreo de Interacciones",
            desc: "Monitorea interacciones en tiempo real y optimiza la forma en que conectas con tus clientes y socios comerciales.",
            icon: IconMonitor,
        },
        {
            title: "Soporte 24/7 Premium",
            desc: "Accede a atención permanente y prioritaria para resolver cualquier consulta técnica o de plataforma de inmediato.",
            icon: IconSupport,
        },
        {
            title: "Automatización Intuitiva",
            desc: "Simplifica la gestión de procesos, reduce errores y ahorra tiempo con herramientas de despliegue inteligente.",
            icon: IconAutomation,
        },
    ];


    return (
        <section id="features" className="bg-light py-9 relative overflow-hidden">
             {/* Elemento de Fondo Sutil Asimétrico (UI Pro) */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 z-0 transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Título Principal y Subtítulo: Foco y Legibilidad */}
                <div className="text-center mb-16 max-w-4xl mx-auto"> 
                    <p className="text-accent text-base font-bold uppercase tracking-widest mb-3">
                        Características Premium
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
                        <span className="text-primary">Innovación</span> y Potencia para tu Equipo
                    </h2>
                    <p className="text-dark/70 text-xl">
                        Nuestra tecnología está diseñada para darle a tu equipo de ventas una ventaja digital inmediata en el mercado.
                    </p>
                </div>

                {/* Contenedor de las Tarjetas: Diseño con espacio entre ellas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            // Tarjeta: Diseño elevado, sombra fuerte, transición de fondo.
                            className="group bg-white p-8 rounded-2xl shadow-xl border border-transparent 
                                        hover:border-primary/50 transition-all duration-500 
                                        transform hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* EFECTO DE LUZ SUTIL (Pseudo-elemento de marca) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-2xl"></div>

                            {/* Contenido (debe estar en un z-index superior) */}
                            <div className="relative z-10">
                                {/* Contenedor de Icono (Con Anillo de Acnéto) */}
                                <div className="flex items-center justify-center w-9 h-9 rounded-full duration-300">
                                    {/* Icono: Color blanco para contraste con el Primary */}
                                    <item.icon className="w-7 h-7 text-cyan-950" /> 
                                </div>

                                {/* Título */}
                                <h3 className="text-2xl font-extrabold text-dark mb-3">
                                    {item.title}
                                </h3>
                                
                                {/* Descripción */}
                                <p className="text-dark/80">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;