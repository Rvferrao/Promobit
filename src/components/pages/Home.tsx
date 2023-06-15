import { Header } from "../Header";
import { Hero } from "../Hero";
import { Movies } from "../Movies";

export const Home = () => (
  <>
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Movies />
    </div>
  </>
);
