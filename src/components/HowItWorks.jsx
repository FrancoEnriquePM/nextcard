const HowItWorks = () => {
    const steps = [
        {
            step: 1,
            title: "Creación Centralizada", // Título más profesional
            text: "Diseña y emite la tarjeta digital NextCard para cada miembro del equipo directamente desde la plataforma administrativa.",
        },
        {
            step: 2,
            title: "Intercambio Instantáneo", // Título más profesional
            text: "Comparte tu identidad profesional al instante mediante tecnología NFC, un simple toque o escaneando un código QR único.",
        },
        {
            step: 3,
            title: "Guardado Directo", // Título más profesional
            text: "Tu nuevo contacto guarda tu información en su dispositivo móvil con un solo clic, sin necesidad de apps.",
        },
        {
            step: 4,
            title: "Conexión Activa", // Título más profesional
            text: "Obtén datos valiosos de interacción para un seguimiento optimizado y mantiene tu red profesional siempre actualizada.",
        },
    ];

    return (
        <section id="how" className="bg-light py-9 relative overflow-hidden">
             {/* Fondo de Diseño Asimétrico Sutil (Nivel Pro) */}
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-30 z-0 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Título y Subtítulo Centralizado */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <p className="text-accent text-base font-bold uppercase tracking-widest mb-3">
                        Flujo de Transformación
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
                        Activación en <span className="text-primary">4 Pasos</span>
                    </h2>
                    <p className="text-dark/70 text-xl">
                        Descubre lo simple que es pasar de la tarjeta física tradicional a la eficiencia digital de NextCard.
                    </p>
                </div>
                
                {/* Contenedor de los Pasos (Grid con Línea de Tiempo) */}
                <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* LÍNEA DE TIEMPO HORIZONTAL (Solo Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 hidden lg:block transform -translate-y-1/2"></div>

                    {steps.map((s, i) => (
                        <div
                            key={s.step}
                            // Tarjeta de Paso: Diseño limpio, sombra sutil, efecto de elevación.
                            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 relative z-10 text-center"
                        >
                            {/* Punto de Conexión de la Línea de Tiempo (Solo Desktop) */}
                            {i < steps.length && (
                                <div className="absolute hidden lg:block -right-4 -left-4 top-1/2 h-1 bg-primary/10"></div>
                            )}

                            {/* Contenedor del Número de Paso */}
                            <div className="relative w-max mx-auto mb-4">
                                {/* Anillo de Acnéto Fijo */}
                                <div className="absolute -inset-1 rounded-full bg-accent opacity-20 transform scale-100 transition-all duration-500 group-hover:scale-110"></div>
                                
                                {/* Número del Paso: Foco en color primario */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-cyan-950 font-extrabold text-xl relative z-10 ring-4 ring-white/50">
                                    {s.step}
                                </div>
                            </div>

                            {/* Título del Paso (Más grande y con énfasis) */}
                            <h3 className="text-xl font-extrabold text-dark mb-2 mt-4">
                                {s.title}
                            </h3>
                            
                            {/* Descripción del Paso */}
                            <p className="text-dark/80 text-sm">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;