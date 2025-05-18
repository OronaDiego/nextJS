import NavBar from "./components/NavBar.js";
import Boton from "./components/Boton.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <div >
      <NavBar/>
      <Boton className={"bg-sky-500"}>
      <p>Hace Click Aqui</p>
      </Boton>

      <Footer/>


    </div>
  );
}
