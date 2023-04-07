import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMeteo from "./components/NavbarMeteo";
import FooterMeteo from "./components/FooterMeteo";
import RomaPrev from "./components/RomaPrev";
import MilanoPrev from "./components/MilanoPrev";
import NapoliPrev from "./components/NapoliPrev";
import PasianoPrev from "./components/PasianoPrevs";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavbarMeteo />
      <Routes>
        <Route path="/" element={<PasianoPrev />} />
        <Route path="/roma-previsioni" element={<RomaPrev />} />
        <Route path="/milano-previsioni" element={<MilanoPrev />} />
        <Route path="/napoli-previsioni" element={<NapoliPrev />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterMeteo />
    </BrowserRouter>
  );
}

export default App;
