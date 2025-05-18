import Link from "next/link";

const Productos = ()=>{
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl">Productos</h1>
                <h3 className="text-3xl">Contenido de la pagina</h3>
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </div>
        </div>
    )
}
export default Productos;
