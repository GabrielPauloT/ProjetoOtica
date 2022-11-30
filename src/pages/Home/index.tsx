import { Cards } from "@otica/components/Cards";
import { Footer } from "@otica/components/Footer";
import { Header } from "@otica/components/Header";
import { listaCard } from "./mock";
import { CardsWrapper, Container } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Header title={'Início'} />
      <CardsWrapper>
        <Cards listCard={listaCard} />
      </CardsWrapper>
      <Footer />
    </Container>
  )
}