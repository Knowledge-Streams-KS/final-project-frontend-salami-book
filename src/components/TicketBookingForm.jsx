import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMatches,
  selectMatch,
  selectTicketCategory,
  addToCart,
} from "../actions/ticketActions.js";

const TicketBookingForm = () => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.tickets.matches);
  console.log(matches);
  const selectedMatch = useSelector((state) => state.tickets.selectedMatch);
  const selectedTicketCategory = useSelector(
    (state) => state.tickets.selectedTicketCategory,
  );

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const handleMatchSelect = (matchId) => {
    dispatch(selectMatch(matchId));
  };

  const handleTicketCategorySelect = (categoryId) => {
    dispatch(selectTicketCategory(categoryId));
  };

  const handleAddToCart = () => {
    if (selectedMatch && selectedTicketCategory) {
      dispatch(addToCart(selectedMatch.id, selectedTicketCategory.id));
      // Optionally: show confirmation message or navigate to cart
    }
  };

  return (
    <div>
      <h2 className="text-white">Buy Tickets</h2>
      <div>
        <label>Select Match:</label>
        <select onChange={(e) => handleMatchSelect(e.target.value)}>
          <option value="">Select a match</option>
          {matches.map((match) => (
            <option key={match.id} value={match.id}>
              {match.team1Name} vs {match.team2Name}
            </option>
          ))}
        </select>
      </div>
      {selectedMatch && (
        <div>
          <label>Select Ticket Category:</label>
          <select onChange={(e) => handleTicketCategorySelect(e.target.value)}>
            <option value="">Select a ticket category</option>
            {selectedMatch.ticketCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} - {category.price}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        onClick={handleAddToCart}
        disabled={!selectedMatch || !selectedTicketCategory}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default TicketBookingForm;
