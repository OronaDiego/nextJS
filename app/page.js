import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Slider from "./components/Slider.js";
import Productos from "./productos/[categoria]/page.js";
import Post from "./api/Post.js";
import ContactForm from "./components/ContactForm.js";

export default function Home() {
  return (
    <div >
      <NavBar/>
      <Slider/>
      <Productos/>
      <Post/>
      <ContactForm/>
      <Footer/>


    </div>
  );
}
