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
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import CreateMatch from "./pages/CreateMatch";
import AddField from "./pages/AddField";
import AddPlayer from "./pages/AddPlayer";
import AddTeam from "./pages/AddTeam";
import TicketBookingForm from "./components/TicketBookingForm";

function App() {
  return (
    <>
      <div className="font-barlow-condensed bg-[#0e0f0f] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
          <Route path="fields" element={<Fields />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="matches" element={<Matches />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="creatematch" element={<CreateMatch />} />
          <Route path="addfield" element={<AddField />} />
          <Route path="addplayer" element={<AddPlayer />} />
          <Route path="addteam" element={<AddTeam />} />

          <Route path="ticket" element={<TicketBookingForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
