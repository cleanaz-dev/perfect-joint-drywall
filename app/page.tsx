import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";
import Navbar from "@/components/site/navbar";
import Process from "@/components/site/process";
import ProjectGallery from "@/components/site/project-gallery";
import Services from "@/components/site/services";
import StatsBar from "@/components/site/stats-bar";
import Testimonials from "@/components/site/testimonials";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <Process />
        <ProjectGallery/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
