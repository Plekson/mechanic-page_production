import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Profile from "./components/Profile/Profile";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import Contact from "./components/Contact/Contact";
import Statistics from "./components/Statistics/Statistics";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section>
        <Profile />
      </section>

      <section id="services">
        <Offer />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section>
        <FAQ />
      </section>

      <section>
        <Statistics />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
