import Link from "next/link";

Link
export default function NotFound (){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl">Error 404</h1>
                <h3 className="text-3xl"> La pagina que estas buscando no existe</h3>
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </div>
        </div>
    )
}