import ContactForm from "./components/ContactForm.js";
import ProductList from "./components/ProductList.js";

export default function Home() {
  return (
    <div >
      <ProductList categoria={"Baterias"}/>
      <ContactForm/>
    </div>
  );
}
