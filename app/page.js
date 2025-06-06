import ContactForm from "./components/ContactForm.js";
import ProductList from "./components/ProductList.js";

export default function Home() {
  return (
    <div >
      <h1 className="text-center text-4xl p-10">Destacados</h1>
      <ProductList categoria={"Baterias"}/>
      <ContactForm/>
    </div>
  );
}
