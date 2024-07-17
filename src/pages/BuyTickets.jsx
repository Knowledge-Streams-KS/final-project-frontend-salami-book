import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import MatchListComponent from "../components/MatchListComponent";
import TicketListComponent from "../components/TicketListComponent";
import TicketDetails from "../components/TicketDetails";

const BuyTickets = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchId, setSelectedMatchId] = useState(""); // Initialize with an empty string
  const [matchTickets, setMatchTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  useEffect(() => {
    if (selectedMatchId) {
      fetchMatchTickets(selectedMatchId);
    } else {
      setMatchTickets([]); // Clear tickets if no match is selected
    }
  }, [selectedMatchId]);

  const fetchMatches = async () => {
    try {
      const response = await axiosInstance.get("/matches");

      setMatches(response.data.matches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  const fetchMatchTickets = async (matchId) => {
    try {
      const response = await axiosInstance.get(`/matchTickets/${matchId}`);

      setMatchTickets(response.data.matchTickets);

      // const data =
      console.log(ticketData);

      setSelectedTicket(null); // Reset selected ticket when fetching new tickets
    } catch (error) {
      console.error("Error fetching match tickets:", error);
    }
  };

  const handleMatchSelect = (matchId) => {
    setSelectedMatchId(matchId);
  };

  const handleTicketSelect = (ticketId) => {
    setSelectedTicket(ticketId);
    console.log("TicketId", ticketId);
    console.log("on handle ticket", selectedTicket);
  };

  console.log("Selected match id is ", selectedMatchId);
  console.log("Selected match Ticket is ", matchTickets);
  console.log(
    "SelectedTicket is ",
    selectedTicket,
    "of match ",
    selectedMatchId,
  );

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-80">
        <h2 className="mb-4 mt-5 text-center text-4xl text-[#08723e]">
          Upcoming Matches
        </h2>
        <MatchListComponent
          matches={matches}
          onSelectMatch={handleMatchSelect}
          selectedMatchId={selectedMatchId}
        />

        {/* Display match tickets dropdown based on selectedMatchId */}

        <TicketListComponent
          matchTickets={matchTickets}
          onSelectTicket={handleTicketSelect}
        />
        {selectedTicket && <TicketDetails ticket={selectedTicket} />}
      </div>
    </div>
  );
};

export default BuyTickets;
