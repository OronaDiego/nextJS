import Link from "next/link";
// import { usePathname } from "next/navigation";

export default async function Productos({params}){
    const {categoria } = await params;
    console.log(categoria);
    
    // const ubicacion = usePathname();
    // console.log(ubicacion);
    
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl">{categoria}</h1>
                <h3 className="text-3xl">Contenido de la pagina</h3>
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </div>
        </div>
    )
}
