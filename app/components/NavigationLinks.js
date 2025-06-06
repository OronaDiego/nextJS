// components/NavigationLinks.js
import Link from "next/link";

const NavigationLinks = () => {
    return (
        <nav className="flex gap-5">
            <Link href="/" className="text-white">
                Inicio
            </Link>
            <Link href="/productos" className="text-white">
                Productos
            </Link>
            <Link href="/contacto" className="text-white">
                Contacto
            </Link>
        </nav>
    );
};

export default NavigationLinks;
