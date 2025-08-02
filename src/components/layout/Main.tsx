import AboutUs from "../../features/AboutUs";
import Destinations from "../../features/Destinations";
import Experiences from "../../features/Experiences";
import Home from "../../features/Home";

const Main = () => {
  return (
    <main className="flex flex-col px-7 gap-20">
      <section>
        <Home />
      </section>
      <section>
        <Destinations />
      </section>
      <section>
        <Experiences />
      </section>
      <section>
        <AboutUs />
      </section>
    </main>
  );
};

export default Main;
