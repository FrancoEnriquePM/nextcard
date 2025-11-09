// Icono de Checkmark (Ejemplo)
const CheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Pricing = () => {
  // Datos mantenidos y correctos
  const plans = [
    {
      name: "vCard Digital (QR)",
      price: "8",
      per: "BOB (pago único)", // 8 BOB
      recommended: false,
      features: [
        "Tarjeta digital (solo QR)",
        "Compartir mediante QR",
        "Incluye hosting y generación QR",
        "Soporte y diseño básico",
      ],
      cta: "Comprar Digital",
      ctaLink: "#",
    },
    {
      name: "vCard Física (QR)",
      price: "15",
      per: "BOB (pago único)", // 15 BOB
      recommended: false,
      features: [
        "Tarjeta física impresa (con QR)",
        "Material de impresión premium",
        "Diseño y mano de obra incluidos",
        "Ideal para redes presenciales",
      ],
      cta: "Solicitar Física",
      ctaLink: "#",
    },
    {
      name: "Pack Empresarial (10 vCards)",
      price: "150",
      per: "BOB (pack total)", // 150 BOB
      recommended: true, // MANTENIDO COMO DESTACADO
      features: [
        "Producción de 10 tarjetas físicas + QR",
        "Gestión de equipo centralizada",
        "Diseño unificado para toda la empresa",
        "Soporte y diseño empresarial",
      ],
      cta: "Obtener Pack Pro",
      ctaLink: "#",
    },
    {
      name: "Servicio Premium",
      price: "35",
      per: "BOB (pago único)", // 35 BOB
      recommended: false,
      features: [
        "QR + Diseño Personalizado Avanzado",
        "Material e impresión premium",
        "Diseño y soporte adicional",
        "Máxima exclusividad",
      ],
      cta: "Solicitar Premium",
      ctaLink: "#",
    },
  ];

  return (
    <section id="pricing" className="bg-white py-9">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título y Subtítulo Centralizado */}
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-primary text-base font-bold uppercase tracking-widest mb-3">
            Planes Inteligentes
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Encuentra el Plan <span className="text-accent">Perfecto</span>
          </h2>
          <p className="text-dark/70 text-xl">
            Escala tus necesidades con estructuras de precios flexibles,
            diseñadas para equipos de cualquier tamaño.
          </p>
        </div>

        {/* Contenedor de las Tarjetas de Planes: AJUSTE DE RESPONSIVIDAD */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* sm:grid-cols-2 -> Dos columnas en tablets (buena lectura) */}
          {/* lg:grid-cols-4 -> Cuatro columnas en desktop (una sola fila) */}
          {plans.map((plan, i) => (
            <div
              key={i}
              // Estructura de la Tarjeta: CLASES DE ESTILO ORIGINALES MANTENIDAS.
              className={`
                                bg-light p-8 rounded-3xl shadow-xl transition-all duration-500
                                transform hover:-translate-y-2 relative
                                ${
                                  plan.recommended
                                    ? "ring-4 ring-accent shadow-accent/40 bg-primary text-white"
                                    : "border border-light hover:border-primary/50 text-dark"
                                }
                            `}
            >
              {/* Etiqueta Recomendada (si aplica) */}
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-950 text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MÁS POPULAR
                </span>
              )}

              {/* Título del Plan */}
              <h3 className="text-2xl font-extrabold mb-2 text-cyan-950">
                {plan.name}
              </h3>

              {/* Precio */}
              <p
                className={`text-5xl font-extrabold mb-1 ${
                  plan.recommended ? "text-cyan-950" : "text-cyan-800"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`text-sm mb-8 ${
                  plan.recommended ? "text-cyan-900" : "text-cyan-800"
                }`}
              >
                {plan.per}
              </p>

              {/* Lista de Características */}
              <ul className="text-left space-y-3 mb-10">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 text-sm ${
                      plan.recommended ? "text-cyan-900" : "text-cyan-800"
                    }`}
                  >
                    <CheckIcon
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.recommended ? "text-cyan-950" : "text-cyan-800"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botón CTA de Alta Conversión */}
              <a
                href={plan.ctaLink}
                className={`
                                    block w-full py-3 rounded-xl font-bold transition-all duration-300 shadow-lg
                                    ${
                                      plan.recommended
                                        ? "bg-cyan-950 text-white hover:bg-cyan-900 shadow-accent/50" // Color de Acnéto para el recomendado
                                        : "bg-cyan-950 text-white hover:bg-cyan-900" // Color Primario para los demás
                                    }
                                `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
