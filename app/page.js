import { getGamesByCategory } from "./data/data-utils";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";



export default function Home(props) {
  const popularGames = getGamesByCategory('popular');
  const newGames = getGamesByCategory('new')
  return (
    <main className="main">
      <Banner />
      <CardsList dataid="popular" title="Популярные" data = {popularGames}/>
      <CardsList id="new" title="Новинки" data = {newGames} />
      <Promo />
    </main>
  );
}
