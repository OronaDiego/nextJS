import mockData  from "@/app/data/productos.json";
import Link from "next/link";

const MenuNavigation = ({categoria})=>{
    const categorias = categoria ? mockData.filter(item => item.categoria != categoria) : categoria;
    return(
        <div className="container flex-m-auto p-5">
            {
                categorias.map(item => (
                    <Link key={item}href={"/productos/" + item.categoria}className="underline mx-2">{item.categoria}</Link>
                ))
            }
        </div>
    )
}

export default MenuNavigation;