import Contact from "@/components/Contact";
import Design from "@/components/Design";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative flex flex-col h-full w-full p-4 gap-5">
      <Navbar />
      <Hero />
      <Service />
      <Skills />
      <Work />
      <Projects />
      <Design />
      <Contact />
      <SocialMedia />
    </main>
  );
}
