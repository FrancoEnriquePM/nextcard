import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Nota: El color principal 'primary' (oklch(30.2% 0.056 229.695)) 
    // debe estar configurado en tu tailwind.config.js para que 'text-primary' funcione.

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo: Usamos el color principal para el texto del logo */}
                <h1 className="text-2xl font-bold text-primary">NextCard</h1>


                {/* Enlaces principales (Desktop) */}
                <div className="hidden md:flex space-x-8 text-dark font-medium">
                    {/* El hover usará el color principal */}
                    <a href="#features" className="hover:text-primary transition">Características</a>
                    <a href="#how" className="hover:text-primary transition">Cómo Funciona</a>
                    <a href="#pricing" className="hover:text-primary transition">Planes</a>
                    <a href="#contact" className="hover:text-primary transition">Contacto</a>
                </div>


                {/* Botón de Menú Móvil */}
                <button
                    // Usamos el color oscuro para el botón
                    className="md:hidden text-dark focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    )}
                </button>
            </div>


            {/* Menú Móvil Desplegable */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
                    {/* Usamos un hover claro para el menú y el color oscuro para el texto */}
                    <a href="#features" className="block px-6 py-3 hover:bg-primary/10 text-dark">Características</a>
                    <a href="#how" className="block px-6 py-3 hover:bg-primary/10 text-dark">Cómo Funciona</a>
                    <a href="#pricing" className="block px-6 py-3 hover:bg-primary/10 text-dark">Planes</a>
                    <a href="#contact" className="block px-6 py-3 hover:bg-primary/10 text-dark">Contacto</a>
                </div>
            )}
        </nav>
    );
};
export default Navbar;