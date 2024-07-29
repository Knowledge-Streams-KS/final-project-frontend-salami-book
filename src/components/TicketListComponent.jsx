import React from "react";

const TicketListComponent = ({ matchTickets, onSelectTicket }) => {
  const handleTicketSelect = (e) => {
    const selectedTicketId = e.target.value;
    onSelectTicket(selectedTicketId);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Select a Ticket</h3>
      <select
        className="w-full rounded-md border border-gray-300 p-2 text-lg text-black"
        onChange={handleTicketSelect}
      >
        <option value="">Select a ticket</option>
        {matchTickets.map((ticket) => (
          <option key={ticket.TicketId} value={parseInt(ticket.TicketId)}>
            {ticket.Ticket.name} - Price: ${ticket.Ticket.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TicketListComponent;
