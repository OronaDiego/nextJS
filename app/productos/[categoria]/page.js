import Link from "next/link";
import mockData  from "@/app/data/productos.json";
import ProductCard from "@/app/components/ProductCard";
// import { usePathname } from "next/navigation";

export async function generateMetadata({params, searchParams}, parent){
    const {categoria } = await params;
    return{
        title: categoria.toUpperCase().replaceAll("-","") + "| Tienda"
    }
};

export default async function Productos({params}){  
    let categoria;
    if(await params){
        const {categoria } = await params;
    }  
    const items = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;

    return(
        <section className="container m-auto flex justify-center items-center h-screen">
            <div className="text-center">
                {
                    items.map(i => (
                        <ProductCard  key={i.id} item={i}/>
                    )) 
                }
                <Link href={"/"}>Volver a la Pagina Principal</Link>
            </div>
        </section>
    )
}
