import ProductCard from "./ProductCard";

const ProductList = async ({categoria}) => {
    const response = await fetch("http://localhost:3000/api/productos/" + categoria, {cache:"no-store"});
    const items = await response.json();

    return (
        <section className="container m-auto flex justify-center my-20">
            {
                items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </section>
    )
}

export default ProductList