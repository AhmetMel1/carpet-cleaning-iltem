import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PriceList from "@/components/PriceList";
import Process from "@/components/Process";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
        <Header />

        <main className="flex flex-col">
          <Hero />
          <Services />
          <PriceList />
          <Process />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}
