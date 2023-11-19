import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Profile />
      </section>

      <section>
        <Offer />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <FAQ />
      </section>
    </>
  );
}
