import Link from "next/link";
// import { usePathname } from "next/navigation";

export async function generateMetadata({params, searchParams}, parent){
    const {categoria } = await params;
    return{
        title: categoria.toUpperCase().replaceAll("-","") + "| Tienda"
    }
};

export default async function Productos({params}){    
    const {categoria } = await params;
    // const ubicacion = usePathname();
    // console.log(ubicacion);
    
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl">{categoria.toUpperCase().replaceAll("-"," ")}</h1>
                <h3 className="text-3xl">Contenido de la pagina</h3>
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </div>
        </div>
    )
}
