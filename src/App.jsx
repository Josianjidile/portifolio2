import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portifolio from "./components/portifolio/Portifolio";
import Services from "./components/services/Services";
const App = () => {
  return (<div>
     {/* <Cursor/> */}
    <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section >
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services/>
   </section>
    <section id="Portifolio">
      <Parallax type="portifolio"/>
    </section>
    <Portifolio/>
         <section id="Contact">
          <Contact/>
         </section>
  </div>);
};

export default App;
