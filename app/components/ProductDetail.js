import Image from "next/image";

const ProductDetail = ({ item }) => {
    console.log('item desde componente productDetail'+item);
    
    return (
        <div className="flex flex-col items-center mt-10 text-white">
            <Image
                src={"/img/" + item.imagen}
                alt="ImagenProducto"
                width={250}
                height={250}
            />
            <h1 className="text-2xl font-bold mt-4">{item.nombre}</h1>
            <p className="text-lg mt-2">{item.descripcion}</p>
            <p className="text-xl mt-2 font-semibold">${item.precio}</p>
        </div>
    );
};

export default ProductDetail;