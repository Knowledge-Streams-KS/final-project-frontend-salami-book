import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axios.js";

const TicketDetails = ({ ticket, match }) => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const {
    user,
    addToCart,
    clearCart,
    cartItems,
    decrementCartItem,
    incrementCartItem,
    removeFromCart,
    handleCheckout,
  } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [teams, setTeams] = useState([]);

  const handleAddToCart = () => {
    if (!user) {
      console.log("User is not logged in. Redirecting to login...");
      navigate("/login");
      return;
    }

    const ticketIdToFind = parseInt(ticket);

    const selectedCartTicket = tickets.find(
      (ticket) => parseInt(ticket.TicketId) === ticketIdToFind,
    )?.Ticket;

    const ticketToAdd = {
      TicketId: selectedCartTicket.id,
      name: selectedCartTicket.name,
      price: selectedCartTicket.price,
      quantity: quantity,
      matchId: match,
      team1: team1,
      team2: team2,
    };

    if (ticketToAdd) {
      console.log("Ticket to add", ticketToAdd);
    } else {
      console.log("Ticket not found");
    }

    addToCart(ticketToAdd);
  };

  const getTickets = async () => {
    try {
      const response = await axiosInstance.get("/matchTickets");
      console.log("Tickets are: ", response.data.data);
      setTickets(response.data.data);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  const getteam1 = async () => {
    try {
      const response = await axiosInstance.get(`/matches/${match}`);
      console.log("Matches...", response.data.matches);
      setTeam1(response.data.matches.team1);
      setTeam2(response.data.matches.team2);
    } catch (error) {
      console.error("Error fetching match name:", error);
    }
  };

  const getTeams = async () => {
    const response = await axiosInstance.get('/teams')
    setTeams(response.data.teams)
    console.log(response.data.teams)
  }

  useEffect(() => {
    getTickets();
    getteam1();
    getTeams()
  }, [match]);

  const handleIncrement = (ticketId, matchId) => {
    incrementCartItem(ticketId, matchId);
  };

  const handleDecrement = (ticketId, matchId) => {
    decrementCartItem(ticketId, matchId);
  };

  const handleRemove = (ticketId, matchId) => {
    removeFromCart(ticketId, matchId);
  };

  return (
    <div className="mt-4 w-96">
      <h3 className="mb-2 text-xl font-semibold">Ticket Details</h3>
      <div className="rounded-lg bg-[#08723e] p-4 text-lg text-white">
        {cartItems.map((c, index) => (
          <div key={index}>
            <p>Ticket: {c.name}</p>
            <p>
              Match: {teams.find(team => team.id === parseInt(c.team1))?.name} vs {teams.find(team => team.id === parseInt(c.team2))?.name}
            </p>
            <p>Price: ${c.price}</p>
            <div className="mb-2 flex items-center">
              <p className="mr-2">Quantity:</p>
              <span className="mx-2">{c.quantity}</span>
              <div className="ml-36 flex gap-5">
                <button
                  onClick={() => handleDecrement(c.TicketId, c.matchId)}
                  className="rounded bg-black px-2 py-1 text-2xl text-white hover:bg-white hover:text-black hover:transition-all"
                  disabled={c.quantity <= 1}
                >
                  -
                </button>

                <button
                  onClick={() => handleIncrement(c.TicketId, c.matchId)}
                  className="rounded bg-black px-2 py-1 text-2xl text-white hover:bg-white hover:text-black hover:transition-all"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(c.TicketId, c.matchId)}
                  className="rounded bg-red-500 px-2 py-1 text-2xl text-black hover:bg-red-800 hover:text-black hover:transition-all"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddToCart}
          className="mt-2 w-28 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add to Cart
        </button>
        <button
          onClick={handleCheckout}
          className="ml-6 rounded bg-green-500 px-4 py-2 text-white"
        >
          Checkout
        </button>
        <button
          onClick={clearCart}
          className="ml-6 rounded bg-red-500 px-4 py-2 text-white"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
