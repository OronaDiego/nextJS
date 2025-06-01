import Image from "next/image";
import Link from "next/link";

const ProductCard = ({item})=>{
    
    return(
        <div className=" flex flex-col justify-center items-center">
            <div>
                <Link href={"/producto/"+ item.id}>
                    <Image src={'/img/'+ item.imagen} alt={item.nombre} width={50} height={50}/>
                </Link>
            </div>
            <div>
                <p className="text-white">{item.nombre}</p>
                <p>{item.descripcion}</p>
            </div>
        </div>
    )
}

export default ProductCard;