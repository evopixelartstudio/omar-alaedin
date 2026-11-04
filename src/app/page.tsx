import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Purpose } from "@/components/sections/Purpose";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { DifferentialsEditorial } from "@/components/sections/DifferentialsEditorial";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#211B19] text-[#F5F0EB] flex flex-col">
      <Header />
      <Hero />
      <Purpose />
      <PracticeAreas />
      <About />
      <Process />
      <DifferentialsEditorial />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
