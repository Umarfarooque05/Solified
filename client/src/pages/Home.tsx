import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VisionMission from "@/components/VisionMission";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <VisionMission />
        <Projects />
        <About />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
