import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full p-4 gap-5">
      <Navbar />
      <Hero />
      <Service />
      <Skills />
    </main>
  );
}
