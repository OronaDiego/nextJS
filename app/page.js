import NavBar from "./components/NavBar.js";
import Boton from "./components/Boton.js";
import Footer from "./components/Footer.js";
import Slider from "./components/Slider.js";

export default function Home() {
  return (
    <div >
      <NavBar/>
      <Slider/>
      <div className="flex justyfy-center items-center">
          <h1 className="text-5xl text-justify shadow-xl shadow-yellow-500/50 rounded-md text-shadow-lg/30 p-8">Productos</h1>
      </div>
      <Boton className={"bg-sky-500"}>
      <p>Hace Click Aqui</p>
      </Boton>

      <Footer/>


    </div>
  );
}
