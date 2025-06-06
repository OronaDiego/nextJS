import Link from "next/link";
import ProductList from "@/app/components/ProductList";
import { Suspense } from "react";

export async function generateMetadata({params, searchParams}, parent){
    const {categoria } = await params;
    return{
        title: categoria.toUpperCase().replaceAll("-","") + "| Tienda"
    }
};

export async function generateStaticParams(){
    return[
        {categoria:"baterias"},
        {categoria:"guitarras"},
        {categoria:"auriculares"},
        {categoria:"consolas"},
        {categoria:"microfonos"}
    ]
}

export default async function Productos({params}){  
    const {categoria } = await params; 
    return(
        <section className="container m-auto flex justify-center items-center h-screen">
            <Suspense fallback={<h1 className="text-4xl font-extrabold text-white-600">Cargando...</h1>}>
                {
                    <ProductList categoria={categoria}/>
                }
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </Suspense>
        </section>
    )
}
