import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/PokemonInfo" element={<PokemonInfo />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter;