import ProductDetail from "@/app/components/ProductDetail";


export default async function ProductoPage({ params }) {
    const { id } = params;

    try {
        const res = await fetch(`http://localhost:3000/api/producto/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error("Error en fetch:", res.status);
            return <p>Error al cargar el producto.</p>;
        }

        const item = await res.json();

        return (
            <div className="container mx-auto py-10">
                <ProductDetail item={item} />
            </div>
        );
    } catch (error) {
        console.error("Error en page.js:", error);
        return <p>Error interno al cargar el producto.</p>;
    }
}