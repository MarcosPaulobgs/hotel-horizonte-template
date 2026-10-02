import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import BarraDestaques from "@/components/BarraDestaques/BarraDestaques";
import Sobre from "@/components/Sobre/Sobre";
import Comodidades from "@/components/Comodidades/Comodidades";
import Quartos from "@/components/Quartos/Quartos";
import Galeria from "@/components/Galeria/Galeria";
import FormularioReserva from "@/components/FormularioReserva/FormularioReserva";
import Localizacao from "@/components/Localizacao/Localizacao";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BarraDestaques />
        <Sobre />
        <Comodidades />
        <Quartos />
        <Galeria />
        <FormularioReserva />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
