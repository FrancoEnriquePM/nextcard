const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">NextCard</h3>
                    <p className="text-sm">
                        Revoluciona la forma en que tu empresa comparte identidad profesional.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Compañía</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Sobre nosotros</li>
                        <li>Blog</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Producto</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Planes</li>
                        <li>Empresas</li>
                        <li>Soporte</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-3">Síguenos</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-10">
                © {new Date().getFullYear()} NextCard. Todos los derechos reservados.
            </div>
        </footer>
    );
};
export default Footer;