import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Startup from "./components/Startup";
import Technologies from "./components/Technologies";
import Advantages from "./components/Advantages";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Startup />
        <Technologies />
        <Advantages />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;