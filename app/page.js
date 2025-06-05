import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Slider from "./components/Slider.js";
import ContactForm from "./components/ContactForm.js";
import ProductList from "./components/ProductList.js";

export default function Home() {
  return (
    <div >
      <NavBar/>
      <Slider/>
      <ProductList categoria={"Baterias"}/>
      <ContactForm/>
      <Footer/>


    </div>
  );
}
