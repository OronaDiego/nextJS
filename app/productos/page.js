import ProductCard from "../components/ProductCard";


export default async function ProductosPage() {
    const res = await fetch("http://localhost:3000/api/productos", {
        cache: "no-store",
    });

    const productos = await res.json();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Todos los productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {productos.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
