import About from "./about";
import ContactForm from "./contact";
import Header from "./header";
import Home from "./home";
import Services from "./services";
import Location from "./location";
import Footer from "./footer";

export default function Sections() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <ContactForm />
      <Location />
      <Footer />
    </div>
  );
}
