import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import MatchListComponent from "../components/MatchListComponent";
import TicketListComponent from "../components/TicketListComponent";
import TicketDetails from "../components/TicketDetails";
const BuyTickets = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchId, setSelectedMatchId] = useState("");
  const [matchTickets, setMatchTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState("");

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
      console.log(response.data.matchTickets);

      response.data.matchTickets.forEach((ticketObj) => {
        console.log(ticketObj.Ticket);
      });

      // setSelectedTicket(null); // Reset selected ticket when fetching new tickets
    } catch (error) {
      console.error("Error fetching match tickets:", error);
    }
  };

  const handleMatchSelect = (matchId) => {
    setSelectedMatchId(matchId);
  };

  const handleTicketSelect = (ticketId) => {
    setSelectedTicket(ticketId);
  };

  return (
    <div className="flex w-full items-center justify-center min-h-[300px]">
      <div className="w-96">
        <h2 className="mb-4 mt-5 text-center text-4xl text-[#08723e]">
          Upcoming Matches
        </h2>
        <MatchListComponent
          matches={matches}
          onSelectMatch={handleMatchSelect}
          selectedMatchId={selectedMatchId}
        />
        {selectedMatchId && (
          <TicketListComponent
            matchTickets={matchTickets}
            onSelectTicket={handleTicketSelect}
          />
        )}
        {selectedTicket && ( // Render TicketDetails if selectedTicket is truthy
          <TicketDetails ticket={selectedTicket} match={selectedMatchId} />
        )}
      </div>
    </div>
  );
};

export default BuyTickets;
