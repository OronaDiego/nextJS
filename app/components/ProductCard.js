import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={"/producto/" + item.id}>
                <div className="relative w-full h-48">
                    <Image
                        src={"/img/" + item.imagen}
                        alt={item.nombre}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.nombre}</h3>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
            </div>
        </div>
    );
};

export default ProductCard;