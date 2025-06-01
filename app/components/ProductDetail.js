import mockData  from "@/app/data/productos.json";
import Image from "next/image";
const ProductDetail = ({id})=>{
    const item = mockData.find(item => item.id == id);
    return(
        <div className="flex flex-row">
            <div>
                <Image src={'/img/' + item.imagen} alt="ImagenProducto" width={250} height={250}/>
            </div>
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
        </div>
    )
}
export default ProductDetail;