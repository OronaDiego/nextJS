import Image from "next/image";

const ProductCard = ({item})=>{
    
    return(
        <div className=" flex flex-col justify-center items-center">
            <div>
            <Image src={'/img/'+ item.imagen} alt="imagen" width={50} height={50}/>
            </div>
            <div>
                <p className="text-white">{item.nombre}</p>
                <p>{item.descripcion}</p>
            </div>
        </div>
    )
}

export default ProductCard;