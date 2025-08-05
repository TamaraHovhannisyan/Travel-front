import AboutUs from "../../features/AboutUs";
import Destinations from "../../features/Destinations";
import Experiences from "../../features/Experiences";
import Home from "../../features/Home";
import Contact from "../../features/Contact"; // ← Եթե ունես Contact բաժին

const Main = () => {
  return (
    <main className="flex flex-col px-7 gap-20 ">
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>
      <section id="destinations" className="scroll-mt-20">
        <Destinations />
      </section>
      <section id="experiences" className="scroll-mt-20">
        <Experiences />
      </section>
      <section id="aboutus" className="scroll-mt-20">
        <AboutUs />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
};

export default Main;
