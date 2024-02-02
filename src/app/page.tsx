import Hero from "@/components/Hero";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full">
      <Hero />
      <Service />
    </main>
  );
}
