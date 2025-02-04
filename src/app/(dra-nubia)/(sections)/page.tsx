import About from "./about";
import Header from "./header";
import Home from "./home";
import Services from "./services";

export default function Sections() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}