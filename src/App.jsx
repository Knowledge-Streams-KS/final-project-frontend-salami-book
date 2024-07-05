import { Route, Routes } from "react-router";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";
import Leagues from "./pages/Leagues";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Fields from "./pages/Fields";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <div className="bg-[#0e0f0f] text-white font-barlow-condensed ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
          <Route path="fields" element={<Fields />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
