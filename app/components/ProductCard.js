import Image from "next/image";

const ProductCard = (items)=>{
    return(
        <div className=" flex justify-center items-center">
            <Image src={"/img/" + items.imagen} alt="imagen" width="64" height="50"/>
            <div>
                <p className="text-white">{items.nombre}</p>
                <p>{items.descripcion}</p>
            </div>
        </div>
    )
}

export default ProductCard;