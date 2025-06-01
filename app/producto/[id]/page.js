import ProductDetail from "@/app/components/ProductDetail";

export default async function Producto ({params}){
    const {id} = params;
    return(
        <div className=" flex">
            <ProductDetail id={id}/>
        </div>
    )
}